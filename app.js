const translate = {
	es: {
		about: `Bienvenid@s soy Estefania Morales soy de Medellín,Colombia pero
actualmente vivo en la Ciudad de Panamá.
He decidido comenzadar una nueva aventura en el desarrollo web. Mi deseo es aprender sobre programación y
sumergirse por completo en este emocionante mundo tecnológico.
En mi tiempo libre, disfruto de la lectura y de pasar tiempo en la playa, actividades que me permiten
desconectar`,
		about_tittle: 'Acerca de mi',

		description_me: 'Soy una apasionada estudiante de Desarrollo Full stack.',

		home_navbar: 'Inicio',

		contact_home: 'Contacto',

		contact_projects: 'Proyectos',

		contact_skills: 'Habilidades',

		contact_about: 'Acerca de Mí',

		skills_me: 'Habilidades,',

		skills_all: `Siempre me he interesado por adquirir destrezas fundamentales como la atencion al detalle, resolucion de
          problemas y la capacidad de trabajar bajo presión,habilidades que me han servido en mi vida diaria y ahora
          se  me permiten abordar en los retos de la programación con una mentalidad analítica.
          Actualmente estoy aprendiendo JavaScript, HTML y CSS y he comenzado a crear mis primeros proyectos.
          Ademas de esto siempre tengo disposición en fortalecer mis habilidades y saberlas dominarlar.`,

		new_skills: 'Habilidades Blandas',

		skills_c: 'Comunicación',

		skills_t: 'Trabajo en equipo',

		skills_creatividad: 'Creatividad',

		skills_a: 'Adaptabilidad',

		skills_p: 'Proactiva',

		skills_o: 'Organización y gestión de tiempo',

		projects_all: 'Proyectos',

		project_one: 'Proyecto 1',

		project_two: 'Proyecto 2',

		project_thre: 'Proyecto 3 ',

		project_four: 'Proyecto 4',

		demo1: 'VER DEMO',
		demo2: 'VER CODIGO',
		demo3: 'VER DEMO',
		demo4: 'VER CODIGO',
		demo5: 'VER DEMO',
		demo6: 'VER CODIGO',
		demo7: 'VER DEMO',
		demo8: 'VER CODIGO',

		contact_box: 'Contacto',

		info_contact: 'Información de contacto',

		description_contact: 'CONTACTAME ahora ',

		whatsapp: 'Enviar mensaje a WhatsApp',

		sendW: 'Enviar mensaje',

		send_n: 'Nombre',

		send_c: 'Correo',

		send_a: 'Asunto',

		send_m: 'Mensaje',

		description_m: `Soy una desarrolladora web, apasionada por la tecnología y la
          programación.`,

		formulario_msj: ' Formulario enviado con éxito!',

		boton_cerrar: 'cerrar',
	},
	en: {
		about: `Welcome, I'm Estefania Morales, I'm from Medellín, Colombia but
I currently live in Panama City.
He decided to start a new adventure in web development. My desire is to learn about programming and
Completely immerse yourself in this exciting technological world.
In my free time, I enjoy reading and spending time on the beach, activities that allow me
disconnect`,
		about_tittle: 'About me',

		description_me: 'I am a passionate student of Full Stack Development.',

		home_navbar: 'Home',

		contact_home: 'Contact',

		contact_projects: 'Projects',

		contact_skills: 'Skills',

		contact_about: 'About Me',

		skills_me: 'Skills',

		skills_all: `I have always been interested in acquiring fundamental skills such as attention to detail, problem solving.
          problems and the ability to work under pressure, skills that have served me in my daily life and now
          They allow me to approach programming challenges with an analytical mindset.
          I am currently learning JavaScript, HTML and CSS and have started creating my first projects.
          In addition to this, I am always willing to strengthen my skills and know how to master them.`,

		new_skills: 'Soft Skills',

		skills_c: 'Comunication',

		skills_t: 'Teamwork',

		skills_creatividad: 'Creativity',

		skills_a: 'Adaptability',

		skills_p: 'Proactive',

		skills_o: 'Organization and time management',

		projects_all: 'Projects',

		projects_all: 'Proyectos',

		project_one: 'Project 1',

		project_two: 'Project 2',

		project_thre: 'Project 3 ',

		project_four: 'Project 4',

		demo1: 'WATCH DEMO',
		demo2: 'VIEW CODE',
		demo3: 'WATCH DEMO',
		demo4: 'VIEW CODE',
		demo5: 'WATCH DEMO',
		demo6: 'VIEW CODE',
		demo7: 'WATCH DEMO',
		demo8: 'VIEW CODE',

		contact_box: 'Contac',

		info_contact: 'Contact Information',

		description_contact: 'CONTACT ME NOW',

		whatsapp: 'Send message to WhatsApp',

		sendW: 'Send Message',

		send_n: 'Name',

		send_c: 'Mail',

		send_a: 'Affair',

		send_m: 'Message',

		description_m:
			'I am a web developer, passionate about technology and programming.',

		formulario_msj: ' Form submitted successfully!',

		boton_cerrar: 'Closed',
	},
};

function toggle() {
	const isEnglish = document.getElementById('language-toggle').checked;
	const currentLanguage = isEnglish ? 'en' : 'es';

	document.getElementById('about__description').textContent =
		translate[currentLanguage].about;

	document.getElementById('about__tittle').textContent =
		translate[currentLanguage].about_tittle;

	document.getElementById('description__me').textContent =
		translate[currentLanguage].description_me;

	document.getElementById('home__navbar').textContent =
		translate[currentLanguage].home_navbar;

	document.getElementById('contact__home').textContent =
		translate[currentLanguage].contact_home;

	document.getElementById('contact__projects').textContent =
		translate[currentLanguage].contact_projects;

	document.getElementById('contact__skills').textContent =
		translate[currentLanguage].contact_skills;

	document.getElementById('contact__about').textContent =
		translate[currentLanguage].contact_about;

	document.getElementById('skills__me').textContent =
		translate[currentLanguage].skills_me;

	document.getElementById('skills__all').textContent =
		translate[currentLanguage].skills_all;

	document.getElementById('new__skills').textContent =
		translate[currentLanguage].new_skills;

	document.getElementById('skills__c').textContent =
		translate[currentLanguage].skills_c;

	document.getElementById('skills__t').textContent =
		translate[currentLanguage].skills_t;

	document.getElementById('skills__creatividad').textContent =
		translate[currentLanguage].skills_creatividad;

	document.getElementById('skills__a').textContent =
		translate[currentLanguage].skills_a;

	document.getElementById('skills__p').textContent =
		translate[currentLanguage].skills_p;

	document.getElementById('skills__o').textContent =
		translate[currentLanguage].skills_o;

	document.getElementById('projects__all').textContent =
		translate[currentLanguage].projects_all;

	document.getElementById('project__one').textContent =
		translate[currentLanguage].project_one;

	document.getElementById('project__two').textContent =
		translate[currentLanguage].project_two;

	document.getElementById('project__thre').textContent =
		translate[currentLanguage].project_thre;

	document.getElementById('project__four').textContent =
		translate[currentLanguage].project_four;

	document.getElementById('dema_1').textContent =
		translate[currentLanguage].demo1;

	document.getElementById('dema_2').textContent =
		translate[currentLanguage].demo2;

	document.getElementById('dema_3').textContent =
		translate[currentLanguage].demo3;

	document.getElementById('dema_4').textContent =
		translate[currentLanguage].demo4;

	document.getElementById('dema_5').textContent =
		translate[currentLanguage].demo5;

	document.getElementById('dema_6').textContent =
		translate[currentLanguage].demo6;

	document.getElementById('dema_7').textContent =
		translate[currentLanguage].demo7;

	document.getElementById('dema_8').textContent =
		translate[currentLanguage].demo8;

	document.getElementById('contact__box').textContent =
		translate[currentLanguage].contact_box;

	document.getElementById('info__contact').textContent =
		translate[currentLanguage].info_contact;

	document.getElementById('description__contac').textContent =
		translate[currentLanguage].description_contact;

	document.getElementById('WhatsApp').textContent =
		translate[currentLanguage].whatsapp;

	document.getElementById('send').textContent =
		translate[currentLanguage].sendW;

	document.getElementById('send__n').textContent =
		translate[currentLanguage].send_n;

	document.getElementById('send__c').textContent =
		translate[currentLanguage].send_c;

	document.getElementById('send__a').textContent =
		translate[currentLanguage].send_a;

	document.getElementById('send__m').textContent =
		translate[currentLanguage].send_m;

	document.getElementById('formulario').textContent =
		translate[currentLanguage].formulario_e;

	document.getElementById('description__m').textContent =
		translate[currentLanguage].description_m;

	document.getElementById('formulario').textContent =
		translate[currentLanguage].formulario_msj;

	document.getElementById('btn_close-modal').textContent =
		translate[currentLanguage].boton_cerrar;
}
