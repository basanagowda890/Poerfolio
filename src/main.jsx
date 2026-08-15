import React,{useEffect,useRef,useState} from "react";
import {createRoot} from "react-dom/client";
import {motion,useMotionValue,useSpring} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import "./styles.css";

const me={
 name:"Basana Gowda",
 role:"Full Stack Developer",
 college:"Dr. ACS College of Engineering",
 degree:"B.E. in Computer Science Engineering",
 graduation:"2028",
 cgpa:"8.5",
 email:"basanagowda890@gmail.com",
 github:"https://github.com/basanagowda890",
 linkedin:"https://www.linkedin.com/in/basana-gowda-44670a329"
};

const projects=[
 {
  title:"AgriNova-AI",
  desc:"AI-powered crop recommendation system for smart agriculture.",
  tags:["React","FastAPI","Machine Learning"],
  image:"/assets/agrinova.png",
  query:"AgriNova-AI"
 },
 {
  title:"Smart Waste Management",
  desc:"Smart waste management and monitoring with AI and real-time analytics.",
  tags:["Python","FastAPI","ML"],
  image:"/assets/solid-waste.png",
  query:"Smart Waste"
 },
 {
  title:"FIR Management System",
  desc:"Digital FIR management system to register, track and manage complaints.",
  tags:["React","Node.js","MySQL"],
  image:"/assets/fir-management.png",
  query:"FIR Management"
 },
 {
  title:"More Projects",
  desc:"Explore more projects and contributions available on my GitHub profile.",
  tags:["GitHub Profile"],
  kind:"more",
  query:""
 }
];

const tech=[
 ["C","c.svg"],
 ["Python","python.svg"],
 ["Java","java.svg"],
 ["JavaScript","javascript.svg"],
 ["React","react.svg"],
 ["Node.js","node.svg"],
 ["MySQL","mysql.svg"],
 ["Git & GitHub","git.svg"]
];

const achievements=[
 {
  title:"2nd Prize — Anveshana 2025",
  org:"Science Forum | Dr. ACS College of Engineering",
  badge:"2nd Prize",
  desc:"Won 2nd Prize at Anveshana 2025 for Smart Waste Segregation System, an individually designed hardware and AI/ML solution for real-time waste classification."
 },
 {
  title:"Code Neuro Hackathon 2.0",
  org:"Dr. ACS College of Engineering",
  badge:"Hackathon",
  desc:"Participated in Code Neuro Hackathon 2.0 and gained hands-on experience in developing technology solutions within a competitive hackathon environment."
 },
 {
  title:"AIVORA's AI-sthetica",
  org:"National Level | SJB Institute of Technology",
  badge:"National Level",
  desc:"Participated in the national-level AIVORA's AI-sthetica event and explored AI-focused problem solving and innovation."
 },
 {
  title:"Space Tech for Solving Solid Waste Management",
  org:"Yuvapatha Jayanagar",
  badge:"Innovation",
  desc:"Participated in a technology-focused event exploring space technology approaches for solving solid waste management challenges."
 },
 {
  title:"CSE Department Activities",
  org:"Department of Computer Science & Engineering",
  badge:"Leadership",
  desc:"Contributed to coordinating department events and activities as part of the CSE department."
 }
];

function App(){

 const [menu,setMenu]=useState(false);
 const [active,setActive]=useState("home");
 const [progress,setProgress]=useState(0);

 useEffect(()=>{
   const on=()=>{
     const h=document.documentElement.scrollHeight-window.innerHeight;
     setProgress(h?window.scrollY/h:0);
   };

   window.addEventListener("scroll",on,{passive:true});
   on();

   return()=>window.removeEventListener("scroll",on);
 },[]);

 useEffect(()=>{
   const ids=[
     "home",
     "projects",
     "skills",
     "achievements",
     "about",
     "education",
     "hobbies",
     "code",
     "contact"
   ];

   const obs=new IntersectionObserver(
     es=>es.forEach(e=>{
       if(e.isIntersecting)setActive(e.target.id);
     }),
     {
       rootMargin:"-30% 0px -60% 0px"
     }
   );

   ids.forEach(id=>{
     const el=document.getElementById(id);
     if(el)obs.observe(el);
   });

   return()=>obs.disconnect();
 },[]);

 const go=id=>{
   document.getElementById(id)?.scrollIntoView({
     behavior:"smooth"
   });
   setMenu(false);
 };

 const repo=q=>
   q
   ? `${me.github}?tab=repositories&q=${encodeURIComponent(q)}`
   : me.github;

 return(
 <div className="site">

   <div className="tech-bg"/>
   <div className="tech-overlay"/>
   <div className="scanlines"/>

   <div
     className="progress"
     style={{
       transform:`scaleX(${progress})`
     }}
   />

   {/* ================= NAVIGATION ================= */}

   <header className="nav">

     <button
       className="brand"
       onClick={()=>go("home")}
     >
       <span className="brand-icon">BG</span>
       <span>BASANA GOWDA</span>
     </button>

     <nav>
       {[
         "home",
         "projects",
         "skills",
         "achievements",
         "about",
         "education",
         "hobbies",
         "contact"
       ].map(x=>(
         <button
           key={x}
           className={active===x?"active":""}
           onClick={()=>go(x)}
         >
           {x[0].toUpperCase()+x.slice(1)}
         </button>
       ))}
     </nav>

     <div className="nav-right">

       <a
         href="/assets/Basana_Gowda_CV.pdf"
         download="Basana_Gowda_CV.pdf"
         className="cv"
       >
         Download CV
         <Download size={13}/>
       </a>

       <button
         className="hamb"
         onClick={()=>setMenu(!menu)}
       >
         {menu?<X/>:<Menu/>}
       </button>

     </div>

   </header>

   {/* ================= MOBILE NAV ================= */}

   {menu&&(
     <div className="mobile-nav">

       {[
         "home",
         "projects",
         "skills",
         "achievements",
         "about",
         "education",
         "hobbies",
         "contact"
       ].map(x=>(
         <button
           key={x}
           onClick={()=>go(x)}
         >
           {x[0].toUpperCase()+x.slice(1)}
         </button>
       ))}

     </div>
   )}

   <main>

     {/* =====================================================
         1. PROFILE / HERO
     ===================================================== */}

     <section
       id="home"
       className="hero"
     >

       <motion.div
         className="hero-copy"
         initial={{
           opacity:0,
           x:-35
         }}
         animate={{
           opacity:1,
           x:0
         }}
         transition={{
           duration:.8
         }}
       >

         <div className="kicker">
           COMPUTER SCIENCE ENGINEERING • FULL STACK
         </div>

         <h1>
           Hi, I'm <span>Basana Gowda</span>
         </h1>

         <div className="role">
           Full Stack Developer
         </div>

         <p>
           Computer Science Engineering student building modern web
           experiences, exploring new technologies and turning practical
           ideas into software.
         </p>

         <div className="hero-actions">

           <button
             className="primary"
             onClick={()=>go("projects")}
           >
             Explore Projects
             <ArrowRight/>
           </button>

           <button
             className="secondary"
             onClick={()=>go("contact")}
           >
             Contact Me
             <Mail/>
           </button>

         </div>

         <div className="social-row">

           <a
             href={me.github}
             target="_blank"
             rel="noreferrer"
           >
             <Github/>
           </a>

           <a
             href={me.linkedin}
             target="_blank"
             rel="noreferrer"
           >
             <Linkedin/>
           </a>

           <a href={"mailto:"+me.email}>
             <Mail/>
           </a>

         </div>

       </motion.div>

       <motion.div
         className="hero-image"
         initial={{
           opacity:0,
           scale:.94,
           y:20
         }}
         animate={{
           opacity:1,
           scale:1,
           y:0
         }}
         transition={{
           duration:1,
           delay:.15
         }}
       >

         <div className="image-ring"/>

         <img
           src="/assets/profile-cinematic.png"
           alt="Basana Gowda"
         />

         <div className="code-orb">
           &lt;/&gt;
         </div>

       </motion.div>

       <button
         className="scroll-cue"
         onClick={()=>go("projects")}
       >
         <span>SCROLL TO EXPLORE</span>
         <ChevronDown/>
       </button>

     </section>


     {/* =====================================================
         2. PROJECTS
     ===================================================== */}

     <Section
       id="projects"
       number="01"
       label="SELECTED WORK"
       title={
         <>
           Projects with <em>purpose.</em>
         </>
       }
     >

       <div className="project-grid">

         {projects.map((p,i)=>(
           <Project
             key={p.title}
             p={p}
             i={i}
             href={repo(p.query)}
           />
         ))}

       </div>

     </Section>


     {/* =====================================================
         3. SKILLS & TECHNOLOGIES
     ===================================================== */}

     <Section
       id="skills"
       number="02"
       label="SKILLS & TECHNOLOGIES"
       title={
         <>
           A toolkit for <em>building.</em>
         </>
       }
     >

       <div className="tech-grid">

         {tech.map(([name,file],i)=>(
           <motion.div
             className="tech-card glass"
             key={name}
             whileHover={{
               y:-8,
               scale:1.03
             }}
             transition={{
               type:"spring",
               stiffness:320,
               damping:18
             }}
           >

             <img
               src={"/assets/"+file}
               alt={name}
             />

             <span>{name}</span>

             <i>
               0{i+1}
             </i>

           </motion.div>
         ))}

       </div>

     </Section>


     {/* =====================================================
         4. ACHIEVEMENTS & HACKATHONS
     ===================================================== */}

     <section
       className="section achievements-section"
       id="achievements"
     >

       <div className="section-kicker">
         ACHIEVEMENTS & HACKATHONS
       </div>

       <h2>
         Milestones that shaped my <span>journey.</span>
       </h2>

       <p className="section-subtitle">
         Milestones, competitions and activities that have helped me
         grow through practical experience and continuous learning.
       </p>

       <div className="achievements-grid">

         {achievements.map((a,i)=>(
           <article
             className={
               "achievement-card "+
               (i===0?"featured":"")
             }
             key={a.title}
           >

             <div className="achievement-top">

               <span className="achievement-index">
                 0{i+1}
               </span>

               <span className="achievement-badge">
                 {a.badge}
               </span>

             </div>

             <h3>
               {a.title}
             </h3>

             <div className="achievement-org">
               {a.org}
             </div>

             <p>
               {a.desc}
             </p>

             <div className="achievement-glow"/>

           </article>
         ))}

       </div>

     </section>


     {/* =====================================================
         5. STATS
     ===================================================== */}

     <section className="stats glass">

       <Stat
         n="2+"
         t="Years Learning"
       />

       <Stat
         n="5+"
         t="Projects Built"
       />

       <Stat
         n="8.5"
         t="CGPA"
       />

       <Stat
         n="∞"
         t="Lifelong Learning"
       />

     </section>


     {/* =====================================================
         6. ABOUT ME
     ===================================================== */}

     <Section
       id="about"
       number="03"
       label="ABOUT ME"
       title={
         <>
           Turning ideas into <em>digital solutions.</em>
         </>
       }
     >

       <div className="about-grid">

         <div className="copy">

           <p>
             I'm a Computer Science Engineering student at
             <b> Dr. ACS College of Engineering</b>.
             I enjoy building modern web applications and exploring
             technologies that help solve practical problems.
           </p>

           <p>
             My current learning focus is full stack development
             across frontend, backend, databases and developer tools.
           </p>

         </div>

         <div className="facts">

           {[
             ["EDUCATION","B.E. in CSE"],
             ["COLLEGE","Dr. ACS College of Engineering"],
             ["GRADUATION","2028"],
             ["CGPA","8.5"]
           ].map(([a,b])=>(
             <div key={a}>

               <small>{a}</small>

               <strong>{b}</strong>

             </div>
           ))}

         </div>

       </div>

     </Section>


     {/* =====================================================
         7. EDUCATION
     ===================================================== */}

     <Section
       id="education"
       number="04"
       label="EDUCATION"
       title={
         <>
           My academic <em>journey.</em>
         </>
       }
     >

       <div className="education glass">

         <Edu
           year="2024 – 2028"
           title="B.E. in Computer Science Engineering"
           place="Dr. ACS College of Engineering, Bangalore"
           extra="CGPA: 8.5"
         />

         <Edu
           year="2022 – 2024"
           title="Pre-University (PUC)"
           place="Bunt's Sangha RNS PU College"
           extra="Marks: 92%"
         />

         <Edu
           year="2020 – 2022"
           title="SSLC"
           place="St. Anthony's High School"
           extra="Marks: 86%"
         />

       </div>

     </Section>


     {/* =====================================================
         8. HOBBIES
     ===================================================== */}

     <Section
       id="hobbies"
       number="05"
       label="HOBBIES"
       title={
         <>
           Beyond <em>the code.</em>
         </>
       }
     >

       <div className="hobbies-grid">

         {[
           [
             "Painting",
             "Creative expression through color and visual design."
           ],
           [
             "Pencil Sketching",
             "Drawing and exploring detail through pencil art."
           ],
           [
             "Playing Sports",
             "Staying active and enjoying competitive sports."
           ]
         ].map(([name,desc],i)=>(
           <motion.div
             className="hobby-card glass"
             key={name}
             whileHover={{
               y:-8,
               scale:1.02
             }}
           >

             <span>
               0{i+1}
             </span>

             <h3>
               {name}
             </h3>

             <p>
               {desc}
             </p>

           </motion.div>
         ))}

       </div>

     </Section>


     {/* =====================================================
         9. INFORMATION IN CODE
     ===================================================== */}

     <Section
       id="code"
       number="06"
       label="MY INFORMATION IN CODE"
       title={
         <>
           The developer <em>behind the work.</em>
         </>
       }
     >

       <div className="code-window glass">

         <div className="window-bar">

           <i/>
           <i/>
           <i/>

           <span>
             basana.js
           </span>

         </div>

         <pre>

<div className="code-line">
  <span className="tok-key">const</span>{" "}
  <span className="tok-var">basana</span>{" "}
  <span className="tok-op">=</span>{" "}
  <span className="tok-brace">{"{"}</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">name</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-string">
    "Basana Gowda"
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">role</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-string">
    "Full Stack Developer"
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">education</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-string">
    "B.E. in Computer Science Engineering"
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">college</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-string">
    "Dr. ACS College of Engineering"
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">graduation</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-number">
    2028
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">cgpa</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-number">
    8.5
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">puc</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-string">
    "Bunt's Sangha RNS PU College — 92%"
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">sslc</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-string">
    "St. Anthony's High School — 86%"
  </span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">hobbies</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-bracket">[</span>
  <span className="tok-string">"Painting"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"Pencil Sketching"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"Playing Sports"</span>
  <span className="tok-bracket">]</span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;
  <span className="tok-key">skills</span>
  <span className="tok-punc">:</span>{" "}
  <span className="tok-bracket">[</span>
  <span className="tok-string">"C"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"Python"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"Java"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"JavaScript"</span>
  <span className="tok-punc">,</span>
</div>

<div className="code-line">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <span className="tok-string">"React"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"Node.js"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"MySQL"</span>
  <span className="tok-punc">,</span>{" "}
  <span className="tok-string">"Git &amp; GitHub"</span>
  <span className="tok-bracket">]</span>
</div>

<div className="code-line">
  <span className="tok-brace">{"}"}</span>
  <span className="tok-punc">;</span>
</div>

         </pre>

       </div>

     </Section>


     {/* =====================================================
         10. CONTACT
     ===================================================== */}

     <Section
       id="contact"
       number="07"
       label="CONTACT"
       title={
         <>
           Let's build something <em>meaningful.</em>
         </>
       }
     >

       <div className="contact-grid">

         {[
           [
             Mail,
             "EMAIL",
             me.email,
             "mailto:"+me.email
           ],
           [
             Linkedin,
             "LINKEDIN",
             "basana-gowda-44670a329",
             me.linkedin
           ],
           [
             Github,
             "GITHUB",
             "basanagowda890",
             me.github
           ],
           [
             MapPin,
             "LOCATION",
             "India",
             "#"
           ]
         ].map(([Icon,l,v,h])=>(
           <a
             key={l}
             href={h}
             target={
               h.startsWith("http")
               ?" _blank"
               :undefined
             }
             rel={
               h.startsWith("http")
               ?"noreferrer"
               :undefined
             }
             className="contact-card glass"
           >

             <Icon/>

             <span>

               <small>
                 {l}
               </small>

               <b>
                 {v}
               </b>

             </span>

             <ArrowUpRight/>

           </a>
         ))}

       </div>

     </Section>

   </main>

   <footer>

     <span>
       © 2026 Basana Gowda
     </span>

     <span>
       Code • Build • Innovate
     </span>

     <button
       onClick={()=>go("home")}
     >
       ↑
     </button>

   </footer>

 </div>
 );
}


/* =========================================================
   COMPONENTS
========================================================= */

function Stat({n,t}){
 return(
   <div>
     <strong>{n}</strong>
     <span>{t}</span>
   </div>
 );
}


function Edu({year,title,place,extra}){
 return(
   <div className="edu-row">

     <span className="dot"/>

     <div>

       <small>{year}</small>

       <h3>{title}</h3>

       <p>{place}</p>

       {extra&&
         <em>{extra}</em>
       }

     </div>

   </div>
 );
}


function Section({
 id,
 number,
 label,
 title,
 children
}){
 return(
   <section
     id={id}
     className="section about-premium"
   >

     <motion.div
       initial={{
         opacity:0,
         y:25
       }}
       whileInView={{
         opacity:1,
         y:0
       }}
       viewport={{
         once:true,
         amount:.18
       }}
       transition={{
         duration:.65
       }}
     >

       <div className="section-top">

         <span>
           {number} / {label}
         </span>

       </div>

       <h2>
         {title}
       </h2>

       {children}

     </motion.div>

   </section>
 );
}


function Project({p,i,href}){

 return(
   <motion.a
     href={href}
     target="_blank"
     rel="noreferrer"
     className="project-card glass"

     initial={{
       opacity:0,
       y:30
     }}

     whileInView={{
       opacity:1,
       y:0
     }}

     viewport={{
       once:true,
       amount:.12
     }}

     transition={{
       duration:.6,
       delay:i*.07
     }}

     whileHover={{
       y:-10
     }}
   >

     <div
       className={
         "project-visual "+
         (p.kind||"image")
       }
     >

       {p.image?
         <img
           src={p.image}
           alt={p.title}
         />
         :
         <div className="abstract-ui">

           <span>
             &lt;/&gt;
           </span>

           <b>
             {p.title}
           </b>

           <i>
             GITHUB REPOSITORY
           </i>

         </div>
       }

       <div className="open">
         <ExternalLink/>
       </div>

     </div>

     <div className="project-info">

       <div>

         <small>
           PROJECT {String(i+1).padStart(2,"0")}
         </small>

         <h3>
           {p.title}
         </h3>

         <p>
           {p.desc}
         </p>

         <div className="tags">

           {p.tags.map(t=>(
             <span key={t}>
               {t}
             </span>
           ))}

         </div>

       </div>

       <ArrowUpRight className="arrow"/>

     </div>

   </motion.a>
 );
}


createRoot(
 document.getElementById("root")
).render(
 <App/>
);