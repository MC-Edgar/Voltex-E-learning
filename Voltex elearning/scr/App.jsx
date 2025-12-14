import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, CheckCircle, XCircle, LogOut, Home, Upload, ChevronDown, ChevronRight, PlayCircle, Menu } from 'lucide-react';

const VoltexELearning = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [tutorials, setTutorials] = useState([
    {
      id: 1, title: 'Fundamentos de Electricidad Industrial', description: 'Conceptos esenciales de electricidad aplicados a la industria',
      sections: [
        {id: 1, title: 'Conceptos básicos de corriente, voltaje y resistencia', duration: '25 min'},
        {id: 2, title: 'Interpretación de diagramas eléctricos industriales', duration: '30 min'},
        {id: 3, title: 'Tipos de redes y sistemas trifásicos (estrella, triángulo)', duration: '28 min'},
        {id: 4, title: 'Tipos de protecciones eléctricas usadas en la industria', duration: '22 min'}
      ],
      content: 'En este curso aprenderás los fundamentos de electricidad industrial, desde conceptos básicos hasta sistemas trifásicos y protecciones. Incluye ejemplos prácticos de aplicaciones industriales reales.',
      files: [],
      exam: {
        questions: [
          {id: 1, question: '¿Qué ley relaciona voltaje, corriente y resistencia?', options: ['Ley de Ohm','Ley de Kirchhoff','Ley de Faraday','Ley de Ampere'], correct: 0},
          {id: 2, question: 'En un sistema trifásico, ¿qué desfase hay entre fases?', options: ['90°','120°','180°','60°'], correct: 1},
          {id: 3, question: '¿Cuál es la función principal de un disyuntor?', options: ['Ahorrar energía','Proteger contra sobrecorriente','Regular voltaje','Medir potencia'], correct: 1}
        ],
        passingScore: 70
      }
    },
    {
      id: 2, title: 'Cableado y Canalización', description: 'Técnicas profesionales de instalación y montaje de cables',
      sections: [
        {id: 1, title: 'Cómo seleccionar el cable correcto según carga y norma', duration: '20 min'},
        {id: 2, title: 'Buenas prácticas de canalización industrial', duration: '25 min'},
        {id: 3, title: 'Cómo marcar cables correctamente', duration: '15 min'},
        {id: 4, title: 'Montaje seguro de tableros eléctricos industriales', duration: '30 min'}
      ],
      content: 'Aprende las técnicas profesionales para selección, instalación y marcado de cables. Incluye normativas vigentes y buenas prácticas en canalización con bandejas, tubos y conduits.',
      files: [],
      exam: {
        questions: [
          {id: 1, question: '¿Qué factor NO influye en la selección del calibre de cable?', options: ['Corriente a transportar','Temperatura ambiente','Color del cable','Longitud del tendido'], correct: 2},
          {id: 2, question: '¿Cuál es el sistema de canalización más usado en industria?', options: ['Tubería PVC','Escalerillas portacables','Cable directo','Canaleta decorativa'], correct: 1},
          {id: 3, question: '¿Para qué sirve el marcado de cables?', options: ['Estética','Identificación y trazabilidad','Aumentar resistencia','Ninguna función'], correct: 1}
        ],
        passingScore: 70
      }
    },
    {
      id: 3, title: 'Tableros Eléctricos y Protecciones', description: 'Diseño, montaje y protecciones en tableros industriales',
      sections: [
        {id: 1, title: 'Cómo leer un plano de tablero eléctrico paso a paso', duration: '28 min'},
        {id: 2, title: 'Tipos de disyuntores y su uso óptimo en industria', duration: '25 min'},
        {id: 3, title: 'Configuración de contactores y relés térmicos', duration: '30 min'},
        {id: 4, title: 'Uso de temporizadores, relés y PLC básicos', duration: '32 min'}
      ],
      content: 'Domina la lectura de planos, selección de protecciones y montaje de tableros eléctricos industriales. Incluye configuración práctica de elementos de control y automatización.',
      files: [],
      exam: {
        questions: [
          {id: 1, question: '¿Qué protege un relé térmico?', options: ['Sobrevoltaje','Sobrecarga del motor','Cortocircuito','Fase invertida'], correct: 1},
          {id: 2, question: '¿Cuál es la función de un contactor?', options: ['Medir corriente','Conmutación de cargas','Regular velocidad','Transformar voltaje'], correct: 1},
          {id: 3, question: 'En un plano eléctrico, ¿qué representa un círculo con una X?', options: ['Motor','Lámpara','Pulsador','Contactor'], correct: 1}
        ],
        passingScore: 70
      }
    },
    {
      id: 4, title: 'Motores y Automatización', description: 'Control y automatización de motores eléctricos industriales',
      sections: [
        {id: 1, title: 'Arrancadores directos y estrella-triángulo', duration: '30 min'},
        {id: 2, title: 'Variadores de frecuencia: configuración y puesta en marcha', duration: '35 min'},
        {id: 3, title: 'Detección de fallas típicas en motores eléctricos', duration: '28 min'},
        {id: 4, title: 'Sensores industriales: tipos, elección e instalación', duration: '25 min'}
      ],
      content: 'Aprende a instalar, configurar y mantener sistemas de control de motores. Desde arrancadores tradicionales hasta variadores de frecuencia y sensores inteligentes.',
      files: [],
      exam: {
        questions: [
          {id: 1, question: '¿Cuál es la ventaja del arranque estrella-triángulo?', options: ['Mayor velocidad','Reduce corriente de arranque','Más económico','Mayor torque inicial'], correct: 1},
          {id: 2, question: '¿Qué controla un variador de frecuencia?', options: ['Voltaje únicamente','Velocidad del motor','Corriente del motor','Temperatura'], correct: 1},
          {id: 3, question: '¿Qué sensor se usa para detectar presencia de objetos metálicos?', options: ['Fotoeléctrico','Inductivo','Capacitivo','Ultrasónico'], correct: 1}
        ],
        passingScore: 70
      }
    },
    {
      id: 5, title: 'Seguridad y Normativas', description: 'Procedimientos seguros y cumplimiento normativo',
      sections: [
        {id: 1, title: 'Bloqueo y etiquetado (LOTO) en instalaciones industriales', duration: '22 min'},
        {id: 2, title: 'Mediciones eléctricas seguras con multímetro y pinza', duration: '25 min'},
        {id: 3, title: 'Normas NCh y NEC aplicadas a la industria', duration: '30 min'},
        {id: 4, title: 'Prevención de arcos eléctricos y selección de EPP', duration: '20 min'}
      ],
      content: 'Conoce los procedimientos de seguridad esenciales y normativas vigentes. Aprende técnicas de bloqueo LOTO, mediciones seguras y selección correcta de equipos de protección personal.',
      files: [],
      exam: {
        questions: [
          {id: 1, question: '¿Qué significa LOTO?', options: ['Lock Out Tag Out','Low Output Test Operation','Line Operating Time Out','Load On Test Off'], correct: 0},
          {id: 2, question: '¿Cuál es el EPP básico para trabajos eléctricos?', options: ['Casco únicamente','Guantes, casco y zapatos dieléctricos','Solo guantes','Lentes de sol'], correct: 1},
          {id: 3, question: '¿Qué norma chilena regula instalaciones eléctricas?', options: ['NCh 4/2003','ISO 9001','OHSAS 18001','NEC 2020'], correct: 0}
        ],
        passingScore: 80
      }
    },
    {
      id: 6, title: 'Trabajo en Terreno - Casos Reales Voltex', description: 'Experiencias y soluciones prácticas en proyectos reales',
      sections: [
        {id: 1, title: 'Puesta en marcha segura de un sistema eléctrico', duration: '28 min'},
        {id: 2, title: 'Diagnóstico rápido de fallas en línea industrial', duration: '30 min'},
        {id: 3, title: 'Checklist de inspección para mantenimiento preventivo', duration: '20 min'},
        {id: 4, title: 'Resolución de fallas reales - Videos casos Voltex', duration: '35 min'}
      ],
      content: 'Casos reales de proyectos ejecutados por Voltex. Aprende metodologías de diagnóstico, procedimientos de puesta en marcha y resolución de fallas basadas en experiencias reales del equipo.',
      files: [],
      exam: {
        questions: [
          {id: 1, question: '¿Cuál es el primer paso en una puesta en marcha?', options: ['Energizar todo','Verificar documentación y planos','Llamar al cliente','Probar motores'], correct: 1},
          {id: 2, question: 'En diagnóstico de fallas, ¿qué se verifica primero?', options: ['Cables internos','Alimentación y protecciones','Motor','Sensores'], correct: 1},
          {id: 3, question: '¿Con qué frecuencia se hace mantenimiento preventivo?', options: ['Cada 10 años','Según plan del fabricante','Solo cuando falla','Una vez al año siempre'], correct: 1}
        ],
        passingScore: 70
      }
    },
    {
      id: 7, title: 'Especialización Avanzada', description: 'Técnicas avanzadas para profesionales experimentados',
      sections: [
        {id: 1, title: 'Mediciones con analizador de redes (armónicos, FP)', duration: '32 min'},
        {id: 2, title: 'Banco de condensadores: dimensionamiento y ajuste', duration: '28 min'},
        {id: 3, title: 'Comunicaciones industriales: Modbus, Profibus y Ethernet/IP', duration: '35 min'},
        {id: 4, title: 'Integración básica entre PLC y HMI', duration: '30 min'}
      ],
      content: 'Nivel avanzado para especialistas. Análisis de calidad de energía, corrección de factor de potencia, protocolos de comunicación industrial y programación de sistemas SCADA básicos.',
      files: [],
      exam: {
        questions: [
          {id: 1, question: '¿Qué mide un analizador de redes?', options: ['Solo voltaje','Parámetros de calidad de energía','Temperatura','Velocidad'], correct: 1},
          {id: 2, question: '¿Para qué sirve un banco de condensadores?', options: ['Almacenar energía','Corregir factor de potencia','Arrancar motores','Filtrar ruido'], correct: 1},
          {id: 3, question: '¿Qué protocolo es más usado en automatización industrial?', options: ['HTTP','Modbus','Bluetooth','WiFi'], correct: 1}
        ],
        passingScore: 75
      }
    }
  ]);
  const [completedExams, setCompletedExams] = useState({});
  const [enrolledCourses, setEnrolledCourses] = useState([1,2,3]);
  const [currentView, setCurrentView] = useState('home');
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [takingExam, setTakingExam] = useState(false);
  const [examAnswers, setExamAnswers] = useState({});
  const [examResult, setExamResult] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [showSidebar, setShowSidebar] = useState(true);
  const [showAddTutorial, setShowAddTutorial] = useState(false);
  const [editingTutorial, setEditingTutorial] = useState(null);
  const [newTutorial, setNewTutorial] = useState({title:'',description:'',content:'',sections:[],files:[],questions:[],passingScore:70});

  const adminUser = {email:'ecoronel',password:'admin',name:'Admin'};
  const panelists = [{id:1,name:'Usuario',email:'usuario',password:'user123'}];

  const handleLogin = (email,password) => {
    if(email===adminUser.email&&password===adminUser.password){setCurrentUser(adminUser);setUserType('admin');}
    else{const p=panelists.find(x=>x.email===email&&x.password===password);if(p){setCurrentUser(p);setUserType('panelist');}else alert('Credenciales incorrectas');}
  };

  const handleFileUpload = (e) => {
    const files=Array.from(e.target.files).map(f=>({id:Date.now()+Math.random(),name:f.name,size:f.size,type:f.type,url:URL.createObjectURL(f)}));
    setNewTutorial({...newTutorial,files:[...newTutorial.files,...files]});
  };

  const handleAddTutorial = () => {
    if(!newTutorial.title||newTutorial.questions.length===0){alert('Complete título y preguntas');return;}
    if(editingTutorial){
      setTutorials(tutorials.map(t=>t.id===editingTutorial.id?{...newTutorial,id:editingTutorial.id}:t));
      alert('Tutorial actualizado');
    }else{
      setTutorials([...tutorials,{id:tutorials.length+1,...newTutorial,exam:{questions:newTutorial.questions,passingScore:newTutorial.passingScore}}]);
      alert('Tutorial creado');
    }
    setNewTutorial({title:'',description:'',content:'',sections:[],files:[],questions:[],passingScore:70});
    setShowAddTutorial(false);setEditingTutorial(null);
  };

  const handleEditTutorial = (t) => {
    setEditingTutorial(t);
    setNewTutorial({title:t.title,description:t.description,content:t.content,sections:t.sections||[],files:t.files||[],questions:t.exam.questions,passingScore:t.exam.passingScore});
    setShowAddTutorial(true);
  };

  const handleSubmitExam = () => {
    let c=0;currentTutorial.exam.questions.forEach((q,i)=>{if(examAnswers[i]===q.correct)c++;});
    const s=(c/currentTutorial.exam.questions.length)*100;
    const r={score:s,passed:s>=currentTutorial.exam.passingScore,correct:c,total:currentTutorial.exam.questions.length};
    setExamResult(r);setCompletedExams({...completedExams,[`${currentUser.id}-${currentTutorial.id}`]:r});
  };

  const gradBtn='linear-gradient(135deg,#0066cc 0%,#00d9ff 100%)';
  const gradBg='linear-gradient(135deg,#0a1929 0%,#001a3d 50%,#003366 100%)';
  const glassCard='rgba(255,255,255,0.95)';
  const glassNav='linear-gradient(90deg,rgba(0,26,61,0.95) 0%,rgba(0,51,102,0.95) 100%)';

  if(!currentUser){
    return(
      <div className="min-h-screen flex items-center justify-center p-4 relative" style={{background:gradBg}}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl" style={{top:'10%',left:'20%'}}/>
          <div className="absolute w-96 h-96 bg-cyan-400 rounded-full opacity-10 blur-3xl" style={{bottom:'10%',right:'20%'}}/>
        </div>
        <div className="w-full max-w-md relative z-10">
          <div className="rounded-xl shadow-2xl p-8 backdrop-blur-xl border" style={{background:'rgba(17,24,39,0.7)',borderColor:'rgba(0,217,255,0.2)'}}>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2" style={{color:'#00d9ff',textShadow:'0 0 20px rgba(0,217,255,0.5)'}}>VOLTEX</h1>
              <p className="text-sm mb-4" style={{color:'#00d9ff'}}>Power Engineers</p>
              <h2 className="text-2xl font-light text-white">E-Learning</h2>
            </div>
            <LoginForm onLogin={handleLogin}/>
          </div>
        </div>
      </div>
    );
  }

  if(userType==='admin'){
    return(
      <div className="min-h-screen" style={{background:gradBg}}>
        <nav className="text-white p-4 backdrop-blur-sm" style={{background:glassNav,borderBottom:'1px solid rgba(0,217,255,0.2)'}}>
          <div className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold" style={{color:'#00d9ff',textShadow:'0 0 20px rgba(0,217,255,0.5)'}}>VOLTEX E-Learning</h1>
            <button onClick={()=>{setCurrentUser(null);setUserType(null);}} className="px-4 py-2 rounded">Salir</button>
          </div>
        </nav>
        <div className="container mx-auto p-6">
          <div className="rounded-xl shadow-2xl p-6 backdrop-blur-xl" style={{background:glassCard}}>
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-bold">Gestión de Tutoriales</h2>
              <button onClick={()=>setShowAddTutorial(!showAddTutorial)} className="text-white px-4 py-2 rounded-lg" style={{background:gradBtn}}>+ Nuevo</button>
            </div>
            {showAddTutorial&&(
              <div className="p-6 rounded-xl mb-6 border" style={{background:'rgba(240,249,255,0.9)'}}>
                <h3 className="text-xl font-bold mb-4">{editingTutorial?'Editar':'Nuevo'} Tutorial</h3>
                <input type="text" placeholder="Título" value={newTutorial.title} onChange={(e)=>setNewTutorial({...newTutorial,title:e.target.value})} className="w-full p-3 border rounded mb-3"/>
                <textarea placeholder="Descripción" value={newTutorial.description} onChange={(e)=>setNewTutorial({...newTutorial,description:e.target.value})} className="w-full p-3 border rounded mb-3"/>
                <textarea placeholder="Contenido" value={newTutorial.content} onChange={(e)=>setNewTutorial({...newTutorial,content:e.target.value})} className="w-full p-3 border rounded mb-3 h-24"/>
                <div className="mb-4">
                  <button onClick={()=>setNewTutorial({...newTutorial,sections:[...newTutorial.sections,{id:Date.now(),title:'',duration:'0 min'}]})} className="text-white px-3 py-2 rounded mb-2" style={{background:'linear-gradient(135deg,#10b981,#34d399)'}}>+ Sección</button>
                  {newTutorial.sections.map((s,i)=>(
                    <div key={i} className="flex gap-2 mb-2">
                      <input