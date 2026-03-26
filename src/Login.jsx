import { useState } from 'react';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    }
    // No es necesario hacer más nada, el AuthProvider se encargará del resto.
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-tactical-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl impact-text text-center uppercase tracking-tighter mb-2">
          {isSignUp ? 'Crear Cuenta' : 'Acceso Táctico'}
        </h1>
        <p className="text-center text-text-dim mb-8 text-sm">
          {isSignUp ? 'Regístrate para guardar tu progreso.' : 'Ingresa para continuar tu misión.'}
        </p>

        <form onSubmit={handleAuth} className="space-y-4">
          <input
            className="w-full p-3 bg-white/5 border border-white/10 rounded-md placeholder:text-text-dim/50 focus:outline-none focus:ring-2 focus:ring-tactical-gold"
            type="email"
            placeholder="Email de combate"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-3 bg-white/5 border border-white/10 rounded-md placeholder:text-text-dim/50 focus:outline-none focus:ring-2 focus:ring-tactical-gold"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading} className="w-full py-3 bg-military-olive text-white font-black uppercase text-sm tracking-widest rounded-md hover:bg-neon-green hover:text-black transition-all flex items-center justify-center disabled:opacity-50">
            {loading ? <Loader2 className="animate-spin" /> : (isSignUp ? 'Registrar' : 'Ingresar')}
          </button>

          {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
        </form>

        <p className="text-center text-xs text-text-dim mt-6">
          {isSignUp ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
          <button onClick={() => { setIsSignUp(!isSignUp); setError(null); }} className="font-bold text-tactical-gold hover:underline ml-2">
            {isSignUp ? 'Inicia sesión' : 'Regístrate'}
          </button>
        </p>
      </div>
    </div>
  );
}