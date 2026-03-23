# Plan de Implementación - Plan Calistenia Militar

Arquitectura de una aplicación web progresiva (PWA) de alto rendimiento para el seguimiento del plan de entrenamiento 30 días "Calistenia Militar", con integración de nutrición y videos.

## User Review Required

> [!NOTE]
> **Estrategia de Datos**: Para que la aplicación sea extremadamente rápida en tu iPhone 14, extraeré los datos del Drive una sola vez para poblar la base de datos (Seeding). Un conector directo al Drive ralentizaría la interfaz y requeriría login de Google adicional.

> [!IMPORTANT]
> **Reproductor de Video**: Los videos se integrarán directamente dentro de la aplicación para que no tengas que salir de tu rutina. Esto permite mantener cronómetros activos y el contexto del entrenamiento en todo momento.

> [!TIP]
> **Modo Offline**: Dado que es para iPhone 14, implementaremos un Service Worker para que puedas ver tu rutina del día incluso sin conexión en el gimnasio.

## Proposed Changes

### 1. Backend & Base de Datos (Supabase)
Utilizaremos Supabase para la autenticación, base de datos en tiempo real y almacenamiento seguro.

**Esquema de Tablas Detallado:**
*   `days`: 
    *   `id` (uuid, PK), `title` (text), `type` (enum: FUERZA, HIIT, MIXTO), `duration` (int), `order_index` (int), `carb_type` (enum: ALTO, MEDIO, BAJO)
*   `exercises`: 
    *   `id` (uuid, PK), `day_id` (uuid, FK), `name` (text), `reps` (text), `sets` (text), `video_url` (text), `instruction_text` (text), `order_index` (int)
*   `user_progress`:
    *   `id` (uuid, PK), `user_id` (uuid, auth.users), `day_id` (uuid, FK), `completed_at` (timestamptz), `protein_met` (boolean), `knee_status` (text), `notes` (text)

**Seguridad (RLS):**
*   Tablas `days` y `exercises`: `SELECT` habilitado para todos los usuarios autenticados.
*   Tabla `user_progress`: `ALL` habilitado solo para el `auth.uid() = user_id`.

### 2. Frontend (React + Vite + Vanilla CSS)
Diseño enfocado en estética "Tactical/Premium" (Dark Mode, acentos en verde militar/oro, fuentes tipo Inter/Impact).

*   **Dashboard**: Resumen del día actual, progreso total (0-100%) y acceso rápido a la nutrición.
*   **Calendar**: Vista mensual/semanal para planificar los 30 días.
*   **Workout Player**: Interfaz optimizada para iPhone 14 que guía al usuario ejercicio por ejercicio con cronómetro integrado.
*   **Nutrition Section**: Guía basada en el PDF "Nutrición de Combate", filtrada según el día (Día de Fuerza = Alta Carga, etc.).

### 3. Seguridad & Escalabilidad
*   **RLS (Row Level Security)**: Cada usuario solo ve su propio progreso.
*   **Edge Functions**: Para posibles notificaciones push o integraciones futuras.

## Verification Plan

### Automated Tests
*   `npm run test`: Para validar la lógica de cálculo de macronutrientes y ciclado de carbohidratos.

### Manual Verification
1.  **Vista Móvil**: Verificar en el simulador de iPhone 14 que el "Workout Player" es fácilmente navegable con una sola mano.
2.  **Sincronización**: Marcar un día como completo en PC y verificar que se refleje instantáneamente en el móvil.
3.  **Videos**: Asegurar que los links extraídos de Drive cargan correctamente en el reproductor.

---
*Este plan transforma documentos estáticos en una herramienta de entrenamiento interactiva y profesional.*
