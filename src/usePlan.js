import { useState, useMemo, useCallback, useEffect } from 'react';
import { getDayData, NUTRITION_PLAN } from './data';
import { supabase } from './lib/supabase'; // Importamos el cliente centralizado

// El hook ahora necesita el 'user' para saber a quién pertenece el progreso.
export function usePlan(user) {
    const [currentDayNum, setCurrentDayNum] = useState(1);
    // El estado ahora se inicializa vacío y se carga desde la BD.
    const [dailyChecks, setDailyChecks] = useState(Array.from({ length: 21 }, () => ({ workout: false, protein: false, knee: 'OK' })));
    const [loading, setLoading] = useState(true);

    // 1. Cargar el progreso del usuario desde Supabase cuando el componente se monta.
    useEffect(() => {
        const fetchProgress = async () => {
            if (!user) return;

            setLoading(true);
            const { data, error } = await supabase
                .from('user_progress')
                .select('day_num, workout_completed, protein_met, knee_status')
                .eq('user_id', user.id);

            if (error) {
                console.error("Error al cargar el progreso:", error);
            } else if (data) {
                const newChecks = [...dailyChecks];
                data.forEach(progress => {
                    const dayIndex = progress.day_num - 1;
                    if (dayIndex >= 0 && dayIndex < 21) {
                        newChecks[dayIndex] = {
                            workout: progress.workout_completed,
                            protein: progress.protein_met,
                            knee: progress.knee_status
                        };
                    }
                });
                setDailyChecks(newChecks);
            }
            setLoading(false);
        };

        fetchProgress();
    }, [user]); // Se ejecuta cada vez que el usuario cambia.

    // El `checks` para el día actual se deriva del estado general.
    const checks = dailyChecks[currentDayNum - 1];

    // 2. La función de actualización guarda en Supabase.
    const setChecks = useCallback(async (update) => {
        const newChecksForDay = typeof update === 'function' ? update(checks) : update;

        // Actualiza el estado local inmediatamente para una UI fluida.
        setDailyChecks(prev => {
            const newDailyChecks = [...prev];
            newDailyChecks[currentDayNum - 1] = newChecksForDay;
            return newDailyChecks;
        });

        // Guardar en Supabase (upsert)
        if (user) {
            const { error } = await supabase
                .from('user_progress')
                .upsert({
                    user_id: user.id,
                    day_num: currentDayNum,
                    workout_completed: newChecksForDay.workout,
                    protein_met: newChecksForDay.protein,
                    knee_status: newChecksForDay.knee,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'user_id, day_num' });

            if (error) console.error("Error al guardar progreso:", error);
        }
    }, [currentDayNum, checks, user]);

    const dayData = useMemo(() => getDayData(currentDayNum), [currentDayNum]);
    const currentNutrition = useMemo(() => NUTRITION_PLAN[dayData.type], [dayData.type]);
    const totalProgress = useMemo(() => (dailyChecks.reduce((acc, day) => acc + (day.workout ? 0.5 : 0) + (day.protein ? 0.5 : 0), 0) / 21) * 100, [dailyChecks]);

    return { currentDayNum, setCurrentDayNum, checks, setChecks, dayData, currentNutrition, totalProgress, loading };
}