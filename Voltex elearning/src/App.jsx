import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, LogOut } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [tutorials, setTutorials] = useState([
    {
      id: 1,
      title: 'Fundamentos de Electricidad Industrial',
      description: 'Conceptos esenciales de electricidad aplicados a la industria',
      content: 'Contenido del tutorial...',
      sections: [],
      progress: 0
    }
  ]);
  const [showAddTutorial, setShowAddTutorial] = useState(false);
  const [newTutorial, setNewTutorial] = useState({
    title: '',
    description: '',
    content: '',
    sections: []
  });

  const handleLogin = (email, password) => {
    if (email && password) {
      setCurrentUser({ email, name: email.split('@')[0] });
      setUserType(email === 'admin' ? 'instructor' : 'student');
    }
  };

  const handleAddTutorial = () => {
    if (newTutorial.title && newTutorial.description) {
      setTutorials([...tutorials, {
        id: Date.now(),
        ...newTutorial,
        progress: 0
      }]);
      setNewTutorial({
        title: '',
        description: '',
        content: '',
        sections: []
      });
      setShowAddTutorial(false);
    }
  };

  const handleDeleteTutorial = (id) => {
    setTutorials(tutorials.filter(t => t.id !== id));
  };

  if (!currentUser) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a2a4a 0%, #1a3a5a 50%, #0a1a3a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(20, 35, 55, 0.95)',
          padding: '50px 40px',
          borderRadius: '15px',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
          maxWidth: '450px',
          width: '100%',
          border: '1px solid rgba(0, 217, 255, 0.2)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '800',
              color: '#00d9ff',
              margin: '0 0 8px 0',
              textShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
              letterSpacing: '2px'
            }}>
              VOLTEX
            </h1>
            <p style={{
              fontSize: '13px',
              color: '#888',
              margin: '0 0 15px 0',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Power Engineers
            </p>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '300',
              color: '#bbb',
              margin: '0'
            }}>
              E-Learning
            </h2>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            handleLogin(email, password);
          }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '600',
                color: '#ddd',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Usuario
              </label>
              <input
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ddd',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.6)';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '35px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '600',
                color: '#ddd',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ddd',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.6)';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '13px',
                background: 'linear-gradient(135deg, #0066cc 0%, #0080ff 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                transition: 'all 0.3s',
                boxShadow: '0 8px 20px rgba(0, 102, 204, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 12px 30px rgba(0, 102, 204, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 8px 20px rgba(0, 102, 204, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (userType === 'student') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
        fontFamily: 'system-ui'
      }}>
        <nav style={{
          background: 'rgba(0,0,0,0.3)',
          padding: '20px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ color: '#00d9ff', margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
            VOLTEX E-Learning
          </h1>
          <button
            onClick={() => { setCurrentUser(null); setUserType(null); }}
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <LogOut size={18} /> Salir
          </button>
        </nav>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
          <h2 style={{
            color: 'white',
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '30px'
          }}>
            Mis Tutoriales
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {tutorials.map(tutorial => (
              <div
                key={tutorial.id}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '15px',
                  padding: '20px',
                  color: 'white'
                }}
              >
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: 'bold' }}>
                  {tutorial.title}
                </h3>
                <p style={{ margin: '0 0 15px 0', color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                  {tutorial.description}
                </p>
                <button
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'linear-gradient(135deg,#10b981,#34d399)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Continuar →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Vista de Instructor
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
      fontFamily: 'system-ui'
    }}>
      <nav style={{
        background: 'rgba(0,0,0,0.3)',
        padding: '20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          color: '#00d9ff',
          textShadow: '0 0 20px rgba(0,217,255,0.5)',
          margin: 0,
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          VOLTEX E-Learning
        </h1>
        <button
          onClick={() => { setCurrentUser(null); setUserType(null); }}
          style={{
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <LogOut size={18} /> Salir
        </button>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '15px',
          padding: '30px',
          color: 'white'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              margin: 0
            }}>
              Gestión de Tutoriales
            </h2>
            <button
              onClick={() => setShowAddTutorial(!showAddTutorial)}
              style={{
                background: 'linear-gradient(135deg,#0066cc 0%,#00d9ff 100%)',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Plus size={20} /> Nuevo Tutorial
            </button>
          </div>

          {showAddTutorial && (
            <div style={{
              background: 'rgba(240,249,255,0.9)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '30px',
              color: '#333'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#333',
                margin: '0 0 20px 0'
              }}>
                Nuevo Tutorial
              </h3>

              <input
                type="text"
                placeholder="Título"
                value={newTutorial.title}
                onChange={(e) => setNewTutorial({ ...newTutorial, title: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box',
                  fontSize: '14px'
                }}
              />

              <textarea
                placeholder="Descripción"
                value={newTutorial.description}
                onChange={(e) => setNewTutorial({ ...newTutorial, description: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box',
                  fontSize: '14px',
                  minHeight: '80px',
                  fontFamily: 'inherit'
                }}
              />

              <textarea
                placeholder="Contenido"
                value={newTutorial.content}
                onChange={(e) => setNewTutorial({ ...newTutorial, content: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box',
                  fontSize: '14px',
                  minHeight: '120px',
                  fontFamily: 'inherit'
                }}
              />

              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end'
              }}>
                <button
                  onClick={() => setShowAddTutorial(false)}
                  style={{
                    padding: '10px 20px',
                    background: '#999',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddTutorial}
                  style={{
                    padding: '10px 20px',
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Guardar Tutorial
                </button>
              </div>
            </div>
          )}

          <div style={{ display: 'grid', gap: '15px' }}>
            {tutorials.map(tutorial => (
              <div
                key={tutorial.id}
                style={{
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: 'bold' }}>
                    {tutorial.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                    {tutorial.description}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteTutorial(tutorial.id)}
                  style={{
                    padding: '10px 15px',
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Trash2 size={18} /> Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
