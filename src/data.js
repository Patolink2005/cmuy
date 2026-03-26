export const NUTRITION_PLAN = {
  FUERZA: { carb: 'ALTO', meals: { breakfast: 'Huevos con palta. Carga de energía.', lunch: 'Pollo con arroz/papa + Brócoli.', dinner: 'Carne con pasta/papa. Recuperación.' } },
  HIIT: { carb: 'BAJO', meals: { breakfast: 'Huevos revueltos. Grasas saludables.', lunch: 'Pescado + Vegetales ligeros.', dinner: 'Proteína magra + Ensalada verde.' } },
  MIXTO: { carb: 'MEDIO', meals: { breakfast: 'Huevos + Almendras.', lunch: 'Carne + Vegetales mixtos + Dosis pequeña carbo.', dinner: 'Pescado graso + Vegetales verdes.' } }
};

export const BONUS_TIPS = [
  "BPA y Plásticos: Evita botellas de plástico, son xenoestrógenos.",
  "Soja y Linaza: En exceso pueden alterar tu balance de testosterona.",
  "Alcohol: La cerveza favorece la aromatización (estrogenización)."
];

export function getDayData(dayNum) {
  return PROGRAM_DATA.find(d => d.dayNum === dayNum) || PROGRAM_DATA[0];
}

export const PROGRAM_DATA = [
  {
    "id": "day-1",
    "dayNum": 1,
    "title": "1 - FUERZA - 30min",
    "type": "FUERZA",
    "description": "(Ejecutar procedimiento operativo estándar para activar todo el cuerpo y aprender la técnica básica....",
    "exercises": [
      {
        "id": "1-1",
        "name": "1 - Bodyweight Squat",
        "sets": "3 SERIES - 10–12 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones",
        "video": "https://drive.google.com/file/d/1EBZELlB_svYLY2wvsfyZdvMoXo-7cyEK/view?usp=drivesdk"
      },
      {
        "id": "1-2",
        "name": "2 - Glute Bridge",
        "sets": "3 SERIES - 12-15 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/17XCz5jzwS68aC9WYTKf024vBeG8MgazY/view?usp=drivesdk"
      },
      {
        "id": "1-3",
        "name": "3 - Diamond Push Up",
        "sets": "3 SERIES - 6-8 REPS",
        "procedure": "En posición de flexión, junta las manos formando un diamante con los dedos índices y pulgares. Baja el pecho hacia las manos manteniendo los codos cerca del cuerpo.",
        "video": "https://drive.google.com/file/d/1XdORbvTaS8dWiMIwZcA3X2iy6HrCdJhR/view?usp=drivesdk"
      },
      {
        "id": "1-4",
        "name": "4 - Front Plank",
        "sets": "3 SERIES - 20–30 s REPS",
        "procedure": "En antebrazos o manos y puntas de pies, mantén el cuerpo en línea recta con abdomen firme y glúteos activos.",
        "video": "https://drive.google.com/file/d/1bHuDy4j6QjYziXevf5SHUjBKEG7xLluQ/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-2",
    "dayNum": 2,
    "title": "2 - MIXTO - 28min",
    "type": "MIXTO",
    "description": "\"Incrementar la circulación y mejorar la movilidad con trabajo full body de bajo impacto.\"...",
    "exercises": [
      {
        "id": "2-1",
        "name": "1 - Diamond Push Up",
        "sets": "3 SERIES6-8 REPS",
        "procedure": "En posición de flexión, junta las manos formando un diamante con los dedos índices y pulgares. Baja el pecho hacia las manos manteniendo los codos cerca del cuerpo.",
        "video": "https://drive.google.com/file/d/1xdKTAUH8ZlpChDHlnk9eB4ugKBAk4lOa/view?usp=drivesdk"
      },
      {
        "id": "2-2",
        "name": "2 - Alternating Reverse Lunge",
        "sets": "3 SERIES8–10 por pierna REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": null
      },
      {
        "id": "2-3",
        "name": "3 - Push-Up",
        "sets": "3 SERIES - 6–10 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1Bl5n2rsFO5nKF9VndQhcUL3aR18WT8Km/view?usp=drivesdk"
      },
      {
        "id": "2-4",
        "name": "4 - Dead Bug",
        "sets": "3 SERIES - 10 por lado REPS",
        "procedure": "Boca arriba con brazos y rodillas a 90°, extiende brazo y pierna contrarios hacia el suelo sin arquear la espalda y alterna.",
        "video": null
      }
    ]
  },
  {
    "id": "day-3",
    "dayNum": 3,
    "title": "3-FUERZA-30min",
    "type": "FUERZA",
    "description": "(Familiarizar los hombros y el agarre con la barra mientras se refuerza la espalda.)...",
    "exercises": [
      {
        "id": "3-1",
        "name": "1 - Dead Hang",
        "sets": "3 SERIES 15–25 s REPS",
        "procedure": "Cuelga de la barra con brazos extendidos, hombros activos y agarre firme, manteniendo el cuerpo estable.",
        "video": "https://drive.google.com/file/d/17QM26hO_5FTXPCvldType7DquoD421zh/view?usp=drivesdk"
      },
      {
        "id": "3-2",
        "name": "2 - Inverted Row",
        "sets": "3 SERIES 6–8 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1ThNmUVgas19Tx61eUpD2QnxfzwFY_NBk/view?usp=drivesdk"
      },
      {
        "id": "3-3",
        "name": "3 - Glute Bridge",
        "sets": "3 SERIES 12–15 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/1lBG9MAJ4RlwtYZHutTEki5CQaypJEhjD/view?usp=drivesdk"
      },
      {
        "id": "3-4",
        "name": "4 - Side Plank",
        "sets": "2 SERIES 20 s por lado REPS",
        "procedure": "Apoya antebrazo y borde del pie en el suelo, eleva la cadera y mantén el cuerpo en línea lateral.",
        "video": "https://drive.google.com/file/d/13uP0chCDUMbm9432jHNDkjZNTIbsRaQP/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-4",
    "dayNum": 4,
    "title": "4 -HIIT- 25min",
    "type": "HIIT",
    "description": "(Elevar la frecuencia cardiaca con un circuito sencillo manteniendo control en la técnica.)...",
    "exercises": [
      {
        "id": "4-1",
        "name": "1 - High Knees",
        "sets": "4 SERIES 30 s REPS",
        "procedure": "Corre en el sitio elevando rodillas a la altura de la cadera y moviendo los brazos de forma enérgica.",
        "video": "https://drive.google.com/file/d/1Fq4vCgbGqtO0ElLAUCPp7LaY62FZeDb4/view?usp=drivesdk"
      },
      {
        "id": "4-2",
        "name": "2 - Bodyweight Squat",
        "sets": "4 SERIES 12 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1q5292riSLnq6OASAYd5_KZnHcVOFKt5s/view?usp=drivesdk"
      },
      {
        "id": "4-3",
        "name": "3 - Jumping Jacks",
        "sets": "4 SERIES 20–25 REPS",
        "procedure": "Salta abriendo y cerrando piernas mientras llevas los brazos por encima de la cabeza y vuelves abajo.",
        "video": "https://drive.google.com/file/d/18vUdbA7ZmO8WO2kF6fAdzejhqqysQf9R/view?usp=drivesdk"
      },
      {
        "id": "4-4",
        "name": "4 - Crunch",
        "sets": "4 SERIES 15 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, eleva la parte alta de la espalda acercando el pecho a las rodillas sin tirar del cuello.",
        "video": "https://drive.google.com/file/d/1B8RnR4XvUHZXTisfC8h9m2bDGKdZ9oQM/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-5",
    "dayNum": 5,
    "title": "5 -FUERZA- 32min",
    "type": "FUERZA",
    "description": "(Aumentar el volumen de fuerza full body manteniendo un esfuerzo moderado.)...",
    "exercises": [
      {
        "id": "5-1",
        "name": "1 - Bodyweight Squat",
        "sets": "3 SERIES 15 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1rojAHBNLbDDBXaZU_4lKqtV7_TjQYy6P/view?usp=drivesdk"
      },
      {
        "id": "5-2",
        "name": "2 - Push-Up",
        "sets": "3 SERIES 8–12 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1f7dXqr9b55tMmTSkEP6-BrmCtlA8E0Mr/view?usp=drivesdk"
      },
      {
        "id": "5-3",
        "name": "3 - Inverted Row",
        "sets": "3 SERIES 8–10 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1hUAadm7fTt-JnGrtUUq6-YhimYmd__s1/view?usp=drivesdk"
      },
      {
        "id": "5-4",
        "name": "4 - Front Plank",
        "sets": "3 SERIES 30 s REPS",
        "procedure": "En antebrazos o manos y puntas de pies, mantén el cuerpo en línea recta con abdomen firme y glúteos activos.",
        "video": "https://drive.google.com/file/d/1diQccDgOSiWozDz03VgcuISNCF4nAnpy/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-6",
    "dayNum": 6,
    "title": "6 -HIIT- 32min",
    "type": "HIIT",
    "description": "(Combinar trabajo cardiovascular con movimientos de fuerza ligera en un circuito completo.)...",
    "exercises": [
      {
        "id": "6-1",
        "name": "1 - High Knees",
        "sets": "4 SERIES 30 s REPS",
        "procedure": "Corre en el sitio elevando rodillas a la altura de la cadera y moviendo los brazos de forma enérgica.",
        "video": "https://drive.google.com/file/d/1XbDfYP-7aYBd0LQHgcdy3zZCpJCxO3bF/view?usp=drivesdk"
      },
      {
        "id": "6-2",
        "name": "2 - Jump Squat",
        "sets": "4 SERIES 8–10 REPS",
        "procedure": "Realiza una sentadilla y termina con un salto explosivo, aterrizando suave y bajando de nuevo a sentadilla.",
        "video": "https://drive.google.com/file/d/1hnQ729P_ekxVctdqZLIFxLCBq8KJyeF3/view?usp=drivesdk"
      },
      {
        "id": "6-3",
        "name": "3 - Push-Up",
        "sets": "3 SERIES 8–10 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1TknoPYqMBSTtNkKmhCkLErTsb7DB-dqs/view?usp=drivesdk"
      },
      {
        "id": "6-4",
        "name": "4 - Walkout to Plank",
        "sets": "3 SERIES 6–8 REPS",
        "procedure": "Desde de pie, flexiona caderas, camina con las manos hacia delante hasta llegar a plancha alta, mantén un instante y vuelve caminando con las manos.",
        "video": "https://drive.google.com/file/d/1Mu9bab01YyCJ0kuEGBQLfP87arFaBqab/view?usp=drivesdk"
      },
      {
        "id": "6-5",
        "name": "5 - Mountain Climbers",
        "sets": "4 SERIES 20 por pierna REPS",
        "procedure": "En plancha alta, lleva una rodilla al pecho y luego la otra, alternando a ritmo constante.",
        "video": "https://drive.google.com/file/d/15Sg7d-XRgldjALZ_2t_WbIuFoosNWyw4/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-7",
    "dayNum": 7,
    "title": "7 - MIXTO - 28min",
    "type": "MIXTO",
    "description": "(Bajar un poco la intensidad y trabajar control, isometría y movilidad con énfasis en estabilidad.)...",
    "exercises": [
      {
        "id": "7-1",
        "name": "1 - Wall Sit",
        "sets": "3 SERIES 30–40 s REPS",
        "procedure": "Apoya la espalda en la pared con rodillas a 90° como si estuvieras sentado y mantén la posición.",
        "video": "https://drive.google.com/file/d/1Zt58qwJppWYWHnXLeufEd9qyRgjKo6DA/view?usp=drivesdk"
      },
      {
        "id": "7-2",
        "name": "2 - Glute Bridge",
        "sets": "3 SERIES 12–15 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/1FAtAIxusewR8SlmUclFytSIu-v1npSmU/view?usp=drivesdk"
      },
      {
        "id": "7-3",
        "name": "3 - Bird Dog",
        "sets": "3 SERIES 10 por lado REPS",
        "procedure": "En cuatro apoyos, extiende brazo y pierna contrarios manteniendo la espalda neutra y alterna lados.",
        "video": "https://drive.google.com/file/d/1SNohRHJCkK2tkG_mRDLEGDG24VBa3JYC/view?usp=drivesdk"
      },
      {
        "id": "7-4",
        "name": "4 - Side Plank",
        "sets": "2 SERIES 20–25 s por lado REPS",
        "procedure": "Apoya antebrazo y borde del pie en el suelo, eleva la cadera y mantén el cuerpo en línea lateral.",
        "video": "https://drive.google.com/file/d/1ZIy9aAn7Dknp7QxtNisjdYdvRp63aLfS/view?usp=drivesdk"
      },
      {
        "id": "7-5",
        "name": "5 - Hollow Body Hold",
        "sets": "3 SERIES 20–25 s REPS",
        "procedure": "Boca arriba, eleva hombros y piernas del suelo manteniendo la zona lumbar pegada y el cuerpo en forma de banana.",
        "video": "https://drive.google.com/file/d/1RYQ0g3mjYTqxPynEZlQTUF_dUaevjN5o/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-8",
    "dayNum": 8,
    "title": "8 - FUERZA - 38min",
    "type": "FUERZA",
    "description": "(Subir la carga de trabajo de fuerza manteniendo buena técnica con volumen aumentado.)...",
    "exercises": [
      {
        "id": "8-1",
        "name": "1 - Assisted Bulgarian Split Squat",
        "sets": "3 SERIES 8–10 por pierna REPS",
        "procedure": "Con el empeine del pie trasero apoyado en un banco o silla, baja controlando la rodilla delantera; apóyate con la mano si necesitas ayuda.",
        "video": null
      },
      {
        "id": "8-2",
        "name": "2 - Push-Up",
        "sets": "4 SERIES 8–12 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1JmlaQFrRDsBwXt6Pin3FIady6QCtgg16/view?usp=drivesdk"
      },
      {
        "id": "8-3",
        "name": "3 - Inverted Row",
        "sets": "4 SERIES 8–10 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1B4WvACEZY86PikO6aTIeyX_PkQmxo8hA/view?usp=drivesdk"
      },
      {
        "id": "8-4",
        "name": "4 - Glute Bridge",
        "sets": "3 SERIES 15 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/1OQCUjfD2aMZ5ihPfG0LXpwkZZ4uzY1yq/view?usp=drivesdk"
      },
      {
        "id": "8-5",
        "name": "5 - Plank with Arm Reach",
        "sets": "3 SERIES 8–10 por lado REPS",
        "procedure": "En plancha alta, extiende un brazo al frente alternando lados sin perder estabilidad del tronco.",
        "video": "https://drive.google.com/file/d/1DT4jw74jKF4ihFayIGUtq49EcLWjrJvD/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-9",
    "dayNum": 9,
    "title": "9 - HIIT - 32min",
    "type": "HIIT",
    "description": "(Realizar un circuito tipo misión con intervalos más intensos y mayor volumen.)...",
    "exercises": [
      {
        "id": "9-1",
        "name": "1 - Jumping Jacks",
        "sets": "4 SERIES 30–35 s REPS",
        "procedure": "Salta abriendo y cerrando piernas mientras llevas los brazos por encima de la cabeza y vuelves abajo.",
        "video": "https://drive.google.com/file/d/1sVylPYSTYSkBxzhA0zJhv7OBOfI55kRs/view?usp=drivesdk"
      },
      {
        "id": "9-2",
        "name": "2 - Alternating Reverse Lunge",
        "sets": "4 SERIES 10 por pierna REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": "https://drive.google.com/file/d/1pNZbmIHgBenUa_Dkuij3FBhkeymqztH9/view?usp=drivesdk"
      },
      {
        "id": "9-3",
        "name": "3 - Diamond Push Up",
        "sets": "3 SERIES 6–8 REPS",
        "procedure": "En posición de flexión, junta las manos formando un diamante con los dedos índices y pulgares. Baja el pecho hacia las manos manteniendo los codos cerca del cuerpo.",
        "video": "https://drive.google.com/file/d/1xK7hKMyHB0cXIrVz4KQm5Pwx9d3_NTBs/view?usp=drivesdk"
      },
      {
        "id": "9-4",
        "name": "4 - Burpee",
        "sets": "4 SERIES 8–10 REPS",
        "procedure": "Desde de pie, apoya manos en el suelo, extiende los pies atrás a plancha, vuelve con los pies hacia las manos y sube de nuevo a la posición inicial con o sin salto.",
        "video": "https://drive.google.com/file/d/1vKk92CVxP_t_e_VhgtknXlnIUCARff1M/view?usp=drivesdk"
      },
      {
        "id": "9-5",
        "name": "5 - Mountain Climbers",
        "sets": "4 SERIES 20–25 por pierna REPS",
        "procedure": "En plancha alta, lleva una rodilla al pecho y luego la otra, alternando a ritmo constante.",
        "video": "https://drive.google.com/file/d/1BKjtmlsp5WBDOezhwnIsLYjPzVcG95z7/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-10",
    "dayNum": 10,
    "title": "10 - FUERZA - 38min",
    "type": "FUERZA",
    "description": "(Reforzar tirón y agarre con trabajo específico en barra combinado con fuerza full body.)...",
    "exercises": [
      {
        "id": "10-1",
        "name": "1 - Dead Hang",
        "sets": "3 SERIES 25–35 s REPS",
        "procedure": "Cuelga de la barra con brazos extendidos, hombros activos y agarre firme, manteniendo el cuerpo estable.",
        "video": "https://drive.google.com/file/d/1X4uUu1OTIQ66Wo7i8mSlorRgcLJbiBvR/view?usp=drivesdk"
      },
      {
        "id": "10-2",
        "name": "2 - Inverted Row",
        "sets": "4 SERIES 8–10 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1hL4XeKnap7Ec4-EGI8-OCZdGqovpDRO1/view?usp=drivesdk"
      },
      {
        "id": "10-3",
        "name": "3 - Negative Pull-Up",
        "sets": "3 SERIES 3–5 REPS",
        "procedure": "Comienza con la barbilla por encima de la barra y desciende lentamente controlando la bajada hasta extender brazos.",
        "video": "https://drive.google.com/file/d/1EslxiqPDTdWPk9VymU_lBLLB0SD3W18h/view?usp=drivesdk"
      },
      {
        "id": "10-4",
        "name": "4 - Push-Up",
        "sets": "3 SERIES 10–12 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/15HeUmETf9TXDVLiT7AKt4t19jeRg017M/view?usp=drivesdk"
      },
      {
        "id": "10-5",
        "name": "5 - Bodyweight Squat",
        "sets": "3 SERIES 15 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1tCZwBvbknJfl6GXaFMk0wsOh7qGErddG/view?usp=drivesdk"
      },
      {
        "id": "10-6",
        "name": "6 - Hanging Knee Raise",
        "sets": "3 SERIES 8–10 REPS",
        "procedure": "Colgado de la barra, eleva rodillas hacia el pecho manteniendo el tronco estable y sin balanceo.",
        "video": "https://drive.google.com/file/d/1cGaMG1mbBGMD1tDVhz807Jq_PHyI2R_T/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-11",
    "dayNum": 11,
    "title": "11 - HIIT - 35min",
    "type": "HIIT",
    "description": "(Enfocar en piernas y sistema cardiovascular con trabajo de tren superior integrado.)...",
    "exercises": [
      {
        "id": "11-1",
        "name": "1 - Bodyweight Squat",
        "sets": "3 SERIES 15–20 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1RFM6iByi7b8dVQ5IdG0Vzhl3-39kv14e/view?usp=drivesdk"
      },
      {
        "id": "11-2",
        "name": "2 - Alternating Reverse Lunge",
        "sets": "3 SERIES 10–12 por pierna REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": "https://drive.google.com/file/d/1cUMnYeHfjLDmrXNJlZNxrdeKrqXUcJtr/view?usp=drivesdk"
      },
      {
        "id": "11-3",
        "name": "3 - Jump Squat",
        "sets": "3 SERIES 10 REPS",
        "procedure": "Realiza una sentadilla y termina con un salto explosivo, aterrizando suave y bajando de nuevo a sentadilla.",
        "video": "https://drive.google.com/file/d/1Rji_yLUPMaOdgA1v-bJKT9KiV40ybFxr/view?usp=drivesdk"
      },
      {
        "id": "11-4",
        "name": "4 - Push-Up",
        "sets": "3 SERIES10–12 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1U7tMOlAAQ3cgfA1PZnNnj4jgjUCDmptl/view?usp=drivesdk"
      },
      {
        "id": "11-5",
        "name": "5 - Glute Bridge",
        "sets": "3 SERIES 15 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/1VYmQw94JDt1ViYlzmw5ZJbWWTK5TaNWd/view?usp=drivesdk"
      },
      {
        "id": "11-6",
        "name": "6 - High Knees",
        "sets": "3 SERIES 30–40 s REPS",
        "procedure": "Corre en el sitio elevando rodillas a la altura de la cadera y moviendo los brazos de forma enérgica.",
        "video": "https://drive.google.com/file/d/19iDdj-Udq01L3HwYBxi2B-u35JAQgkqd/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-12",
    "dayNum": 12,
    "title": "12 - FUERZA - 38min",
    "type": "FUERZA",
    "description": "(Dar énfasis al tren superior y al core con volumen aumentado para máxima activación.)...",
    "exercises": [
      {
        "id": "12-1",
        "name": "1 - Push-Up",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1KtvXmQ3ImX2IY2TeSWGCw07cKThiBqxm/view?usp=drivesdk"
      },
      {
        "id": "12-2",
        "name": "2 - Diamond Push Up",
        "sets": "3 SERIES 6–8 REPS",
        "procedure": "En posición de flexión, junta las manos formando un diamante con los dedos índices y pulgares. Baja el pecho hacia las manos manteniendo los codos cerca del cuerpo.",
        "video": "https://drive.google.com/file/d/1LIvNYRq3Nv2JGyssJOFChZHdu4fcdqsM/view?usp=drivesdk"
      },
      {
        "id": "12-3",
        "name": "3 - Inverted Row",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1YSoEr1sIIVb8bx3TC-MiJ6eCcy5kSvzA/view?usp=drivesdk"
      },
      {
        "id": "12-4",
        "name": "4 - Plank to Push-Up",
        "sets": "3 SERIES 8–10 REPS",
        "procedure": "Alterna pasar de plancha sobre antebrazos a plancha alta apoyando manos y volviendo abajo, manteniendo el core firme.",
        "video": "https://drive.google.com/file/d/1raXRXEffSZxSO7rkKa1PYJgKd24VLl-_/view?usp=drivesdk"
      },
      {
        "id": "12-5",
        "name": "5 - Dead Bug",
        "sets": "3 SERIES 12 por lado REPS",
        "procedure": "Boca arriba con brazos y rodillas a 90°, extiende brazo y pierna contrarios hacia el suelo sin arquear la espalda y alterna.",
        "video": "https://drive.google.com/file/d/1ILInfTuVi5MwwUK0Oc8xmDez3X_j1GzJ/view?usp=drivesdk"
      },
      {
        "id": "12-6",
        "name": "6 - Hollow Body Hold",
        "sets": "3 SERIES 25–30 s REPS",
        "procedure": "Boca arriba, eleva hombros y piernas del suelo manteniendo la zona lumbar pegada y el cuerpo en forma de banana.",
        "video": "https://drive.google.com/file/d/17mWvelbPS12vRzpb2jW_biyCUxWc9kvx/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-13",
    "dayNum": 13,
    "title": "13 - MIXTO - 30min",
    "type": "MIXTO",
    "description": "(Entrenamiento tipo EMOM (cada minuto un ejercicio) con énfasis full body y alta densidad.)...",
    "exercises": [
      {
        "id": "13-1",
        "name": "1 - Bodyweight Squat",
        "sets": "4 SERIES 12 por minuto REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1H6DuX7_LMx85MKaMVhZf73bTFunRUvb6/view?usp=drivesdk"
      },
      {
        "id": "13-2",
        "name": "2 - Push-Up",
        "sets": "4 SERIES 8–10 por minuto REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1xZOp2fIQ_80Aor4W_gySzxgdKyV-UjNo/view?usp=drivesdk"
      },
      {
        "id": "13-3",
        "name": "3 - Inverted Row",
        "sets": "4 SERIES 8 por minuto REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1qcuSzKCNCaXMsQhCvCG0sSZ9XBYjcP6T/view?usp=drivesdk"
      },
      {
        "id": "13-4",
        "name": "4 - Alternating Reverse Lunge",
        "sets": "4 SERIES 8 por pierna por minuto REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": "https://drive.google.com/file/d/1yZRTUP2sJj4EYajp8TkFvXmybIXyBUOX/view?usp=drivesdk"
      },
      {
        "id": "13-5",
        "name": "5 - Mountain Climbers",
        "sets": "4 SERIES 20 por pierna por minuto REPS",
        "procedure": "En plancha alta, lleva una rodilla al pecho y luego la otra, alternando a ritmo constante.",
        "video": "https://drive.google.com/file/d/1Afk4sEgcp-bpe7QXcX0p5EuGD7QP-Sq8/view?usp=drivesdk"
      },
      {
        "id": "13-6",
        "name": "6 - Front Plank",
        "sets": "4 SERIES 30–40 s por minuto REPS",
        "procedure": "En antebrazos o manos y puntas de pies, mantén el cuerpo en línea recta con abdomen firme y glúteos activos.",
        "video": "https://drive.google.com/file/d/1xXNODZ-mbzNq5K_SlnmrNHuInnF0GCTv/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-14",
    "dayNum": 14,
    "title": "14 - MIXTO - 32min",
    "type": "MIXTO",
    "description": "(Refuerzo intenso de la zona media y alivio articular con cardio suave integrado.)...",
    "exercises": [
      {
        "id": "14-1",
        "name": "1 - Lateral Step March",
        "sets": "3 SERIES 40 s REPS",
        "procedure": "Da pasos laterales amplios derecha e izquierda con ligera flexión de rodillas y brazos activos.",
        "video": "https://drive.google.com/file/d/1SMY7BgELM1HSThXxz60xg2sK4hC5o_FV/view?usp=drivesdk"
      },
      {
        "id": "14-2",
        "name": "2 - Bird Dog",
        "sets": "3 SERIES 10–12 por lado REPS",
        "procedure": "En cuatro apoyos, extiende brazo y pierna contrarios manteniendo la espalda neutra y alterna lados.",
        "video": "https://drive.google.com/file/d/1D0vGJAg6pHELGLCqeGYHwsIEPTH7og3H/view?usp=drivesdk"
      },
      {
        "id": "14-3",
        "name": "3 - Glute Bridge",
        "sets": "3 SERIES 15 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/18lyBJUeRd-SEWVBF7YtxnxDmDUzmQv0p/view?usp=drivesdk"
      },
      {
        "id": "14-4",
        "name": "4 - Side Plank",
        "sets": "3 SERIES 25–30 s por lado REPS",
        "procedure": "Apoya antebrazo y borde del pie en el suelo, eleva la cadera y mantén el cuerpo en línea lateral.",
        "video": "https://drive.google.com/file/d/1Fcw6Uq9NE7Cjt4CBnp1SEBnE0pzFkSkp/view?usp=drivesdk"
      },
      {
        "id": "14-5",
        "name": "5 - Dead Bug",
        "sets": "3 SERIES 12 por lado REPS",
        "procedure": "Boca arriba con brazos y rodillas a 90°, extiende brazo y pierna contrarios hacia el suelo sin arquear la espalda y alterna.",
        "video": "https://drive.google.com/file/d/1a9SFEdFFe3GqfkviTBgUTJlmYF0UGJ0V/view?usp=drivesdk"
      },
      {
        "id": "14-6",
        "name": "6 - Superman",
        "sets": "3 SERIES 12–15 REPS",
        "procedure": "Boca abajo, eleva simultáneamente brazos y piernas del suelo activando la espalda y los glúteos.",
        "video": "https://drive.google.com/file/d/1BRGnnXCNQx3RdBdzUsRe3oCKOC7uTHqF/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-15",
    "dayNum": 15,
    "title": "15 - FUERZA - 42min",
    "type": "FUERZA",
    "description": "(Subir un nivel la fuerza general con variaciones más desafiantes y volumen alto.)...",
    "exercises": [
      {
        "id": "15-1",
        "name": "1 - Assisted Bulgarian Split Squat",
        "sets": "4 SERIES 10–12 por pierna REPS",
        "procedure": "Con el empeine del pie trasero apoyado en un banco o silla, baja controlando la rodilla delantera; apóyate con la mano si necesitas ayuda.",
        "video": null
      },
      {
        "id": "15-2",
        "name": "2 - Assisted Pistol Squat ",
        "sets": "3 SERIES 5–6 por pierna REPS",
        "procedure": "Sostente de una superficie estable mientras bajas en sentadilla a una pierna, manteniendo la otra extendida al frente.",
        "video": "https://drive.google.com/file/d/11dYuqCUYtL_lOzZscFP-kb7B3JNptUuA/view?usp=drivesdk"
      },
      {
        "id": "15-3",
        "name": "3 - Push-Up",
        "sets": "4 SERIES 12–15 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1Njhlbng-6Jddyb6bgERYgKH9Xf1g87SD/view?usp=drivesdk"
      },
      {
        "id": "15-4",
        "name": "4 - Inverted Row",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1xH_lYGTTJjdQd3RQA6BuRD2suBlvTt59/view?usp=drivesdk"
      },
      {
        "id": "15-5",
        "name": "5 - Glute Bridge",
        "sets": "3 SERIES 15–20 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/1NnrD2oXYJmoy3M20VZlrLWCiYc0SaAr4/view?usp=drivesdk"
      },
      {
        "id": "15-6",
        "name": "6 - Hollow Body Hold",
        "sets": "3 SERIES 30–35 s REPS",
        "procedure": "Boca arriba, eleva hombros y piernas del suelo manteniendo la zona lumbar pegada y el cuerpo en forma de banana.",
        "video": "https://drive.google.com/file/d/112ax0X07TaO8D52ntZNvhFoI9bcOWY5J/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-16",
    "dayNum": 16,
    "title": "16 - HIIT - 38min",
    "type": "HIIT",
    "description": "(Circuito de alta intensidad estilo militar con máximo volumen y control técnico.)...",
    "exercises": [
      {
        "id": "16-1",
        "name": "1 - Burpee",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Desde de pie, apoya manos en el suelo, extiende los pies atrás a plancha, vuelve con los pies hacia las manos y sube de nuevo a la posición inicial con o sin salto.",
        "video": "https://drive.google.com/file/d/17GIi70MJURm489ywD1yCdmh7lbv0Na7F/view?usp=drivesdk"
      },
      {
        "id": "16-2",
        "name": "2 - Jump Squat",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Realiza una sentadilla y termina con un salto explosivo, aterrizando suave y bajando de nuevo a sentadilla.",
        "video": "https://drive.google.com/file/d/1OqlafBhu3qfnFp1sRQr9CdxXrWTbOS1s/view?usp=drivesdk"
      },
      {
        "id": "16-3",
        "name": "3 - Push-Up",
        "sets": "4 SERIES 12–15 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/149LthiAqtXP2AJaen3Dio7TfdJvNgsEX/view?usp=drivesdk"
      },
      {
        "id": "16-4",
        "name": "4 - Mountain Climbers",
        "sets": "4 SERIES 25–30 por pierna REPS",
        "procedure": "En plancha alta, lleva una rodilla al pecho y luego la otra, alternando a ritmo constante.",
        "video": "https://drive.google.com/file/d/1SuiLzd5646vKIN4sf8ZpDy3iK0jdO4lm/view?usp=drivesdk"
      },
      {
        "id": "16-5",
        "name": "5 - Alternating Reverse Lunge",
        "sets": "4 SERIES 10 por pierna REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": "https://drive.google.com/file/d/1IGKqaRRq6KPVHiZFkoCJcA44xB6VbSmN/view?usp=drivesdk"
      },
      {
        "id": "16-6",
        "name": "6 - Plank to Push-Up",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Alterna pasar de plancha sobre antebrazos a plancha alta apoyando manos y volviendo abajo, manteniendo el core firme.",
        "video": "https://drive.google.com/file/d/16KtBHtCRq-qsVSdx4GnCan-onyeG4Pfi/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-17",
    "dayNum": 17,
    "title": "17 - FUERZA - 40min",
    "type": "FUERZA",
    "description": "(Consolidar fuerza de tirón y core en la barra con trabajo complementario full body.)...",
    "exercises": [
      {
        "id": "17-1",
        "name": "1 - Dead Hang",
        "sets": "3 SERIES30–40 s REPS",
        "procedure": "Cuelga de la barra con brazos extendidos, hombros activos y agarre firme, manteniendo el cuerpo estable.",
        "video": "https://drive.google.com/file/d/1nd1bplYZtv2e9m3Xll4ZDhFHFrCmigBt/view?usp=drivesdk"
      },
      {
        "id": "17-2",
        "name": "2 - Inverted Row",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1_XVq5SEl1ikp17Jm_vPGCxwUWO9XibDF/view?usp=drivesdk"
      },
      {
        "id": "17-3",
        "name": "3 - Negative Pull-Up",
        "sets": "4 SERIES 4–5 REPS",
        "procedure": "Comienza con la barbilla por encima de la barra y desciende lentamente controlando la bajada hasta extender brazos.",
        "video": "https://drive.google.com/file/d/10U8qAgjAgjYZEn5EkmEu_3GQuzWAer2Q/view?usp=drivesdk"
      },
      {
        "id": "17-4",
        "name": "4 - Diamond Push Up",
        "sets": "3 SERIES 8–10 REPS",
        "procedure": "En posición de flexión, junta las manos formando un diamante con los dedos índices y pulgares. Baja el pecho hacia las manos manteniendo los codos cerca del cuerpo.",
        "video": "https://drive.google.com/file/d/1hhr5W41x3P8nRRTSymsXBpM1egfYtx1q/view?usp=drivesdk"
      },
      {
        "id": "17-5",
        "name": "5 - Bodyweight Squat",
        "sets": "3 SERIES 15–20 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1R0rc7HZkaoxJabmYrJTJgaSAjvWlrVsm/view?usp=drivesdk"
      },
      {
        "id": "17-6",
        "name": "6 - Hanging Knee Raise",
        "sets": "3 SERIES 10–12 REPS",
        "procedure": "Colgado de la barra, eleva rodillas hacia el pecho manteniendo el tronco estable y sin balanceo.",
        "video": "https://drive.google.com/file/d/1kUCWV7mrJ8-f-3aXmGA_2WnGExpuRUo5/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-18",
    "dayNum": 18,
    "title": "18 - MIXTO - 38min",
    "type": "MIXTO",
    "description": "(Combinar fuerza y cardio en un solo circuito continuo de alto volumen.)...",
    "exercises": [
      {
        "id": "18-1",
        "name": "1 - Bodyweight Squat",
        "sets": "4 SERIES 15 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1kkR8NomNXZNG44I6jFFQAKGWKpDnN4BC/view?usp=drivesdk"
      },
      {
        "id": "18-2",
        "name": "2 - Push-Up",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1i87SDYFVJFnl4i75-EUfOEh8GXxDzBfk/view?usp=drivesdk"
      },
      {
        "id": "18-3",
        "name": "3 - Inverted Row",
        "sets": "4 SERIES 10 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/1k4oPuugtxyzPrCG7rvG3lSohOAJoM8Tk/view?usp=drivesdk"
      },
      {
        "id": "18-4",
        "name": "4 - Alternating Reverse Lunge",
        "sets": "4 SERIES 10 por pierna REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": "https://drive.google.com/file/d/1Vo1JtahRNWb57rdsWsx3wprZm37SXNIe/view?usp=drivesdk"
      },
      {
        "id": "18-5",
        "name": "5 - Shoulder Tap Plank",
        "sets": "3 SERIES 10 por lado REPS",
        "procedure": "En plancha alta, toca con una mano el hombro contrario alternando lados y evitando mover la cadera.",
        "video": "https://drive.google.com/file/d/1QsuQAJ6obiP4xJ3wen5CH0giiMjauq3_/view?usp=drivesdk"
      },
      {
        "id": "18-6",
        "name": "6 - Jumping Jacks",
        "sets": "4 SERIES 30 s REPS",
        "procedure": "Salta abriendo y cerrando piernas mientras llevas los brazos por encima de la cabeza y vuelves abajo.",
        "video": "https://drive.google.com/file/d/1Lz5nkLqB-bo5LO90CCsVMlWN3_7bimI3/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-19",
    "dayNum": 19,
    "title": "19 - MIXTO - 45min",
    "type": "MIXTO",
    "description": "(Simular una misión prolongada con más volumen de repeticiones y trabajo completo.)...",
    "exercises": [
      {
        "id": "19-1",
        "name": "1 - Bodyweight Squat",
        "sets": "4 SERIES 20 REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1oEjQIEHEKbT5hFh07LcJK5i9-hl_MZC7/view?usp=drivesdk"
      },
      {
        "id": "19-2",
        "name": "2 - Alternating Reverse Lunge",
        "sets": "3 SERIES 12 por pierna REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": "https://drive.google.com/file/d/1LxBenHn-ye5-BlSS6Q5nWjRC7i54354E/view?usp=drivesdk"
      },
      {
        "id": "19-3",
        "name": "3 - Push-Up",
        "sets": "4 SERIES 12–15 REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1hIpplvzCF47wzjmEV_jiwu8zUuLKE0Uz/view?usp=drivesdk"
      },
      {
        "id": "19-4",
        "name": "4 - Inverted Row",
        "sets": "4 SERIES 10–12 REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/160zqSJrmXKeVdLBG_PPAombegkKn9ELB/view?usp=drivesdk"
      },
      {
        "id": "19-5",
        "name": "5 - Glute Bridge",
        "sets": "3 SERIES 15–20 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/1QYLNYsfo3of0CGWIAS10Kf8THunB-PNc/view?usp=drivesdk"
      },
      {
        "id": "19-6",
        "name": "6 - Superman",
        "sets": "3 SERIES 12–15 REPS",
        "procedure": "Boca abajo, eleva simultáneamente brazos y piernas del suelo activando la espalda y los glúteos.",
        "video": "https://drive.google.com/file/d/1KIQ40WIpDpCpjRixF8MfAXMLjTKRs6fD/view?usp=drivesdk"
      },
      {
        "id": "19-7",
        "name": "7 - Front Plank",
        "sets": "3 SERIES 40–50 s REPS",
        "procedure": "En antebrazos o manos y puntas de pies, mantén el cuerpo en línea recta con abdomen firme y glúteos activos.",
        "video": "https://drive.google.com/file/d/1lIDxVhhyfDzjkT60JLHdgwPHo03puhSL/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-20",
    "dayNum": 20,
    "title": "20 - FUERZA - 38min",
    "type": "FUERZA",
    "description": "(Reforzar la resistencia muscular mediante posiciones estáticas y trabajo de control.)...",
    "exercises": [
      {
        "id": "20-1",
        "name": "1 - Wall Sit",
        "sets": "3 SERIES 40–50 s REPS",
        "procedure": "Apoya la espalda en la pared con rodillas a 90° como si estuvieras sentado y mantén la posición.",
        "video": "https://drive.google.com/file/d/1RTjjbYsp7waL6voPBDDA4pmdIiveYfeD/view?usp=drivesdk"
      },
      {
        "id": "20-2",
        "name": "2 - Glute Bridge",
        "sets": "3 SERIES 15–20 REPS",
        "procedure": "Boca arriba con rodillas flexionadas, empuja el suelo con los pies y eleva la cadera apretando glúteos.",
        "video": "https://drive.google.com/file/d/1WfCiViuHEunXs0zwBzhECWcw5f54rc7c/view?usp=drivesdk"
      },
      {
        "id": "20-3",
        "name": "3 - Front Plank",
        "sets": "3 SERIES 40–50 s REPS",
        "procedure": "En antebrazos o manos y puntas de pies, mantén el cuerpo en línea recta con abdomen firme y glúteos activos.",
        "video": "https://drive.google.com/file/d/18WkzNYuj6fC1F40VfBsISiMkqgkOoT6o/view?usp=drivesdk"
      },
      {
        "id": "20-4",
        "name": "4 - Side Plank",
        "sets": "3 SERIES 30–35 s por lado REPS",
        "procedure": "Apoya antebrazo y borde del pie en el suelo, eleva la cadera y mantén el cuerpo en línea lateral.",
        "video": "https://drive.google.com/file/d/1fNrLTOo7Icr4SJUB-aGcbdqmT04u4J7n/view?usp=drivesdk"
      },
      {
        "id": "20-5",
        "name": "5 - Hollow Body Hold",
        "sets": "3 SERIES 30–40 s REPS",
        "procedure": "Boca arriba, eleva hombros y piernas del suelo manteniendo la zona lumbar pegada y el cuerpo en forma de banana.",
        "video": "https://drive.google.com/file/d/1ZVOQplkRmjq9RWbaPRciOQlAuGXUOtLx/view?usp=drivesdk"
      },
      {
        "id": "20-6",
        "name": "6 - Shoulder Tap Plank",
        "sets": "3 SERIES 12 por lado REPS",
        "procedure": "En plancha alta, toca con una mano el hombro contrario alternando lados y evitando mover la cadera.",
        "video": "https://drive.google.com/file/d/1RDKo74_YllxUm0IsadPjx_NVS-WADsr7/view?usp=drivesdk"
      }
    ]
  },
  {
    "id": "day-21",
    "dayNum": 21,
    "title": "21 - MIXTO - 45min",
    "type": "MIXTO",
    "description": "(Evaluar la evolución completando un circuito táctico completo de máximo rendimiento.)...",
    "exercises": [
      {
        "id": "21-1",
        "name": "1 - Bodyweight Squat",
        "sets": "1 SERIES Máx repeticiones en 60 s REPS",
        "procedure": "Pies al ancho de hombros, flexiona caderas y rodillas como si fueras a sentarte, manteniendo el pecho arriba y el peso en los talones.",
        "video": "https://drive.google.com/file/d/1XXWriYvU9ZgO7f4cpzUvHB-rjHk8qb2d/view?usp=drivesdk"
      },
      {
        "id": "21-2",
        "name": "2 - Push-Up",
        "sets": "1 SERIES Máx repeticiones en 60 s REPS",
        "procedure": "Manos al ancho de hombros, cuerpo en línea recta; baja el pecho hacia el suelo y empuja fuerte para volver arriba.",
        "video": "https://drive.google.com/file/d/1_3b7JKL21f3gC3LzPJ-h0pIN9MO3ZbBj/view?usp=drivesdk"
      },
      {
        "id": "21-3",
        "name": "3 - Inverted Row",
        "sets": "1 SERIES Máx repeticiones en 60 s REPS",
        "procedure": "Con el cuerpo inclinado bajo una barra o mesa firme, tira del pecho hacia el soporte manteniendo el cuerpo en línea.",
        "video": "https://drive.google.com/file/d/19ZIZlFwZC8pU-0gr31Lz8EWERx3AYATi/view?usp=drivesdk"
      },
      {
        "id": "21-4",
        "name": "4 - Alternating Reverse Lunge",
        "sets": "1 SERIES Máx repeticiones en 60 s REPS",
        "procedure": "Desde de pie, da un paso largo hacia atrás, baja la rodilla trasera hacia el suelo y vuelve arriba alternando piernas.",
        "video": "https://drive.google.com/file/d/1dO_sMCQeb3UBgOh4K3Fyekfy_1tX2w08/view?usp=drivesdk"
      },
      {
        "id": "21-5",
        "name": "5 - Dead Hang",
        "sets": "1 SERIES Máx tiempo REPS",
        "procedure": "Cuelga de la barra con brazos extendidos, hombros activos y agarre firme, manteniendo el cuerpo estable.",
        "video": "https://drive.google.com/file/d/1LBDMNE7bjdGm4ZI7u6Jx5bqEVeg3j2T6/view?usp=drivesdk"
      },
      {
        "id": "21-6",
        "name": "6 - Burpee",
        "sets": "1 SERIES Máx repeticiones en 60 s REPS",
        "procedure": "Desde de pie, apoya manos en el suelo, extiende los pies atrás a plancha, vuelve con los pies hacia las manos y sube de nuevo a la posición inicial con o sin salto.",
        "video": "https://drive.google.com/file/d/1Uer0tV9uC2etFJOXFE3Zv24ecuD9yrig/view?usp=drivesdk"
      },
      {
        "id": "21-7",
        "name": "7 - Hollow Body Hold",
        "sets": "3 SERIES 30 s por ronda REPS",
        "procedure": "Boca arriba, eleva hombros y piernas del suelo manteniendo la zona lumbar pegada y el cuerpo en forma de banana.",
        "video": "https://drive.google.com/file/d/116AotMU1J9SnyPxWBTYhb0L3CfWuawky/view?usp=drivesdk"
      }
    ]
  }
];