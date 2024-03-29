export const info = [
	{
		id: 1,
		name: 'Basics',
		slug: 'basics',
		topics: [
			'computing',
			'internet',
			'http',
			'https',
			'networking',
			'cloud',
			'development',
			'software',
			'apps'
		],
		questions: [
			'What is a computer?',
			'How do computers run?',
			'What is assembly language, C/C++,  interpreted languages, compilers?',
			'What are lower and higher level languages?',
			'How does the Internet work?',
			'How does a website get displayed on my computer?',
			'What are routers, servers, packets, DNS?',
			'What are HTTP, SSL, GET, POST?',
			'What is the cloud, compute, storage?',
			'What is on-premises?',
			'What is virtualization, virtual machines, hypervisors, key management systems?'
		],
		objectives: [
			'Understand the Basics of Computer Science and Engineering',
			'Comprehend the broad differences between programming languages',
			'Grasp the Fundamentals of Internet, web technologies, network infrastructure',
			'Know what constitutes modern, digital infrastructure',
			'Explore cloud computing, cloud storage, virtualization and cloud infrastructure management tools'
		],
		resources: {
			youtube: [
				'https://youtube.com/embed/zN8YNNHcaZc?si=Tj2S7qrsec51DKrJ',
				'https://youtube.com/embed/zOjov-2OZ0E?si=pQnCP85QMk1MNHIh',
				'https://www.youtube.com/embed/6hPMdpk9qA4?si=3eIaOho9EkNWTPjM',
				'https://youtube.com/embed/Uq5w1lnKzlk?si=e3CDZfWZr56kjZb9',
				'https://youtube.com/embed/LTH9m4HkeYY?si=-SCEzZABqeWnriup'
			],
			links: [
				{
					text: "CS50's Understanding Technology | Harvard University",
					url: 'https://pll.harvard.edu/course/cs50s-understanding-technology-0'
				},
				{
					text: 'How Computers Work (UOL) | Coursera',
					url: 'https://www.coursera.org/learn/how-computers-work'
				},
				{
					text: 'How the Web Works: A Primer for Newcomers to Web Development (or anyone, really)',
					url: 'https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/'
				},
				{
					text: 'What is SSL (Secure Sockets Layer)? | Cloudflare',
					url: 'https://www.cloudflare.com/en-gb/learning/ssl/what-is-ssl/'
				},
				{
					text: 'Computational Thinking for Problem Solving Course (UPenn) | Coursera',
					url: 'https://www.coursera.org/learn/computational-thinking-problem-solving'
				},
				{
					text: "CS50's Computer Science for Business Professionals | Harvard University",
					url: 'https://pll.harvard.edu/course/cs50s-computer-science-business-professionals-0'
				},
				{
					text: 'Programming for Everybody (Getting Started with Python) | Coursera',
					url: 'https://www.coursera.org/learn/python'
				},
				{
					text: 'AWS Fundamentals Specialization [3 courses] (AWS) | Coursera',
					url: 'https://www.coursera.org/specializations/aws-fundamentals'
				},
				{
					text: 'Google IT Support Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-it-support'
				}
			]
		}
	},
	{
		id: 2,
		name: 'Apps',
		slug: 'apps',
		topics: ['SaaS', 'apps', 'applications', 'AWS', 'Azure', 'GCP', 'M365', 'Workspace'],
		questions: [
			'Cloud services on AWS, Azure, Google Cloud Platform',
			'Do office work on M365, Google Workspace, LibreOffice',
			'Meet virtually on Teams, Slack, Zoom',
			'Ticketing using Jira, Zendesk',
			'Project management on Jira, Asana, Trello, Monday.com',
			'Knowledge management on Confluence, Notion',
			'Visualize and collaborate on Miro, Mural, Figma',
			'Designing on Photoshop/Illustrator, Figma, Canva'
		],
		objectives: [
			'Know what the free world uses for work',
			'Identify how efficient and simple processes can be',
			'See the opportunity costs and trade-offs for not using them'
		],
		resources: {
			youtube: [
				'https://www.youtube.com/embed/Uq5w1lnKzlk?si=TDvoQNQel3EjCY3_',
				'https://www.youtube.com/embed/II-6dDzc-80?si=S_tQl9gngez_DKj3',
				'https://www.youtube.com/embed/ohtDFXNAUns?si=Fjc4NOyi1-Zdx5p4'
			],
			links: []
		}
	},
	{
		id: 3,
		name: 'Central Tools',
		slug: 'wog',
		topics: ['SG Tech Stack', 'GSIB', 'GCC', 'GDC', 'SG-Teams'],
		questions: [
			'Mainstays in WOG networks, especially the endpoint device, network, and backend infrastructure',
			'AI tools through Pair, Launchpad, AI Bots',
			'Variants of M365 that GovTech deploys, across M365, SG-Teams, Sharepoint Online, ServiceNow ITSM',
			"GovTech's common applications for resource, visitor, asset, workflow management",
			'HR administration through HRPS, Workpal'
		],
		objectives: [
			"Don't dump money recreating stuff already developed",
			'See how far we are behind everyone else',
			'Rid ourselves of misguided sense of superiority and uniqueness'
		],
		resources: {
			youtube: [
				'https://www.youtube.com/embed/5u6nRus74ZQ?si=AJoNdLtdkxV4TV3i',
				'https://www.youtube.com/embed/02f4G6pU-08',
				'https://www.youtube.com/embed/MfGD-cG6nOA',
				'https://www.youtube.com/embed/l8qmHxzCTfE',
				'https://www.youtube.com/embed/E3lum6GcjQo',
				'https://www.youtube.com/embed/k0XR6qv6W-w'
			],
			links: [
				{
					text: 'Home | Singapore Government Developer Portal',
					url: 'https://www.developer.tech.gov.sg/'
				},
				{
					text: 'Our Products',
					url: 'https://www.open.gov.sg/products/'
				},
				{
					text: 'Products and Services',
					url: 'https://www.tech.gov.sg/products-and-services/'
				}
			]
		}
	},
	{
		id: 4,
		name: 'Products',
		slug: 'products',
		topics: [
			'product management',
			'UX',
			'product strategy',
			'execution',
			'project management',
			'startups'
		],
		questions: [
			'How do you identify and prioritize product features?',
			'What metrics do you use to measure product success?',
			'What is a north star metric for a product?',
			'What is UX?',
			'How do you conduct user research, design, prototype, validation?',
			'What are the key principles of designing a user-centric product?',
			'How do you define and communicate the product vision?',
			'How do you find product market fit?'
		],
		objectives: [
			'Know what goes into a good product',
			'Spot solutions in search of a problem',
			'Feel it in your soul when a "product" just ain\'t it',
			'Think user-first, Min/PS/DS last'
		],
		resources: {
			youtube: [
				'https://www.youtube.com/embed/0LNQxT9LvM0?si=KHzWpcisYehJbdHF',
				'https://www.youtube.com/embed/C27RVio2rOs?si=rKY_2K-n0lC6vk54',
				'https://www.youtube.com/embed/QRZ_l7cVzzU?si=sh3L1sWZzBhLb2dy',
				'https://www.youtube.com/embed/6DTK9yDP6p0?si=niskiu1FnnDNhiOQ',
				'https://www.youtube.com/embed/oWZbWzAyHAE?si=aFy0z0ePzrlUTvSD'
			],
			links: [
				{
					text: 'Y Combinator - YouTube',
					url: 'https://www.youtube.com/c/ycombinator'
				},
				{
					text: 'Google UX Design Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-ux-design'
				},
				{
					text: '99% Invisible',
					url: 'https://99percentinvisible.org/'
				},
				{
					text: 'All-In Podcast - YouTube',
					url: 'https://www.youtube.com/@allin'
				},
				{
					text: 'UXPodcast',
					url: 'https://uxpodcast.com/'
				},

				{
					text: 'Transformation Fail - Silicon Valley Product Group',
					url: 'https://www.svpg.com/transformation-fail/'
				},
				{
					text: 'Transforming Product Culture with Lea Hickman',
					url: 'https://www.mindtheproduct.com/transforming-product-culture-lea-hickman/'
				}
			]
		}
	},
	{
		id: 5,
		name: 'Methodologies',
		slug: 'methodologies',
		topics: ['agile', 'waterfall', 'scrum', 'lean', 'kanban'],
		questions: [
			'What is Agile?',
			"Is Scrum what you do when you're Agile?",
			'Wait, Agile is not just implementing Scrum?',
			'What is waterfall and why do people fall back to it?',
			'What about Lean/Kanban/Less?',
			'How do I apply Agile/Scrum/Lean/Kanban in my team?'
		],
		objectives: [
			'Feel even more lost navigating the world of "agile"',
			'Get upset realizing you spent $4000 paying for a Certified Scrum Master / Product Owner',
			'Notice when people spout nonsense and attaching keywords like agile and waterfall',
			'Know the limits of implementing methodologies when the organization is structurally incapable',
			'Feel confident rejecting "daily standups" from ScrumMaster-wannabes'
		],
		resources: {
			youtube: [
				'https://youtube.com/embed/5Ty-WC4gLto',
				'https://youtube.com/embed/J4ihLROXzPk?si=wfk8YSa3fePUtHxs',
				'https://youtube.com/embed/OosYzkP-pLk?si=E7RqVQeN3L50b4sk',
				'https://youtube.com/embed/vSnCeJEka_s?si=GNhjdQVV8rn9l4iH',
				'https://youtube.com/embed/scEDHsr3APg',
				'https://youtube.com/embed/1evfn3qTYGM'
			],
			links: [
				{
					text: 'Manifesto for Agile Software Development',
					url: 'https://agilemanifesto.org/'
				},
				{
					text: 'Principles behind the Agile Manifesto',
					url: 'https://agilemanifesto.org/principles.html'
				},
				{
					text: 'Scrum Training Series - YouTube',
					url: 'https://youtube.com/playlist?list=PLD2BMPY5WcfAYTEYXW0NGxodOi1PLC1XN&si=b_ym-Jy4_UOeS1Iv'
				},
				{
					text: 'Google Project Management: Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-project-management'
				},
				{
					text: 'Agile Project Management with Scrum and Kanban - YouTube',
					url: 'https://www.youtube.com/playlist?list=PL32pD389V8xt_znF-pvOl7OP_xNfnkGgq'
				},
				{
					text: 'Transformation Theater - Silicon Valley Product Group',
					url: 'https://www.svpg.com/transformation-theater/'
				}
			]
		}
	},
	{
		id: 6,
		name: 'Data',
		slug: 'data',
		topics: [
			'database',
			'data warehouse',
			'data lake',
			'analysis',
			'data visualization',
			'data sanitation',
			'business intelligence',
			'storytelling',
			'Tableau',
			'ETL'
		],
		questions: [
			'How mature is the organization in the collection, manipulation, exploitation of data?',
			'What are our business needs for data',
			'What does the data tell us about our current business performance?',
			'How can we improve our customer experience based on the data?',
			'What is ETL?',
			'How can we design and implement a scalable data pipeline to ingest and process large volumes of structured and unstructured data from multiple sources?',
			'What is a typical design of a cloud-native stack to derive business intelligence?'
		],
		objectives: [
			'Know where we truly are amid (self created) hype on data science, transformation, AI',
			"Know what's possible and whats not",
			'Understand the link between business needs, data collection, analysis, storytelling, arriving at actionable insights',
			'Learn about modern cloud-based stacks that let you build a scalable data pipeline'
		],
		resources: {
			youtube: [
				'https://youtube.com/embed/yZvFH7B6gKI?si=knmkZUMf5A21sLXs',
				'https://youtube.com/embed/-bSkREem8dM?si=i6lRT55iMs30lOLS'
			],
			links: [
				{
					text: 'Foundations: Data, Data, Everywhere Course (Google) | Coursera',
					url: 'https://www.coursera.org/learn/foundations-data'
				},
				{
					text: 'Google Data Analytics Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-data-analytics'
				},
				{
					text: 'IBM Data Science Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/ibm-data-science'
				},
				{
					text: 'Intro to Data Visualization with R & ggplot2 | Google Data Analytics Certificate',
					url: 'https://www.youtube.com/watch?v=ZPw0dmGuyyE&list=PLTZYG7bZ1u6rcPlcX75pMkjsYY_HTL7aZ'
				}
			]
		}
	},
	{
		id: 7,
		name: 'AI',
		slug: 'ai',
		topics: [
			'AI',
			'deep learning',
			'machine learning',
			'LLM',
			'RAG',
			'neural networks',
			'natural language processing',
			'computer vision',
			'prompting',
			'pretraining',
			'embeddings'
		],
		questions: [
			'What are the foundational principles and technologies behind AI and LLMs?',
			'How are the various options for deploying AI/LLMs/vision models ',
			'How can AI and LLMs be leveraged to enhance public service delivery?',
			'What part of the AI value chain do we tackle?',
			'What ethical considerations should guide the use of AI in public sectors?',
			'How can we ensure the privacy and security of data used by AI systems?',
			'What are the key challenges in integrating AI technologies into existing IT infrastructure?',
			'How can AI contribute to more efficient and effective public service workflows?',
			'What training or skills are necessary for public sector employees to work effectively with AI?'
		],
		objectives: [
			'Sort through the AI hype from the keepers',
			'Know what everyone not on LLMs is missing out',
			'See the opportunities and challenges across the AI value chain - GPU Chips, Foundational Models, Compute (Training, Inference) + Storage + Data Infrastructure, Application.',
			'Understand the different techniques and methods to enhance your business processes with AI',
			'Spot opportunities to do things much faster and easier with LLMs',
			'Know which LLMs are good, how good, for what'
		],
		resources: {
			youtube: [
				'https://youtube.com/embed/PeMlggyqz0Y?si=X1ZeR-qr01d_BnP-',
				'https://youtube.com/embed/Mf1P3n6TqCc',
				'https://youtube.com/embed/5sLYAQS9sWQ',
				'https://youtube.com/embed/5t1vTLU7s40?si=uEflOaOw_p1eyRoZ',
				'https://youtube.com/embed/jvqFAi7vkBc',
				'https://youtube.com/embed/T-D1OfcDW1M?si=WZJLcElfcEh4-51c',
				'https://youtube.com/embed/oZPTBXnaSBI'
			],
			links: [
				{
					text: 'Introduction to Generative AI',
					url: 'https://www.cloudskillsboost.google/course_templates/536'
				},
				{
					text: 'AI For Everyone Course (DeepLearning.AI) | Coursera',
					url: 'https://www.coursera.org/learn/ai-for-everyone'
				},
				{
					text: 'Deep Learning Specialization - DeepLearning.AI',
					url: 'https://www.deeplearning.ai/courses/deep-learning-specialization/'
				},
				{
					text: 'AI Explained - Youtube',
					url: 'https://www.youtube.com/@aiexplained-official'
				},
				{
					text: 'LLM Visualization',
					url: 'https://bbycroft.net/llm'
				},
				{
					text: "Chamath Palihapitiya podcast chat with Groq's Jonathan Ross",
					url: 'https://twitter.com/chamath/status/1754641005851328553?lang=en'
				},
				{
					text: 'Attention Is All You Need | 31st Conference on Neural Information Processing Systems (NIPS 2017)',
					url: 'https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf'
				}
			]
		}
	},
	{
		id: 8,
		name: 'Technical',
		slug: 'technical',
		topics: [
			'programming',
			'languages',
			'development',
			'algorithms',
			'data',
			'structures',
			'engineering',
			'cybersecurity',
			'CI/CD',
			'git'
		],
		questions: [
			'What is <insert language> and what does it do well?',
			'How do I solve <X> problem? How do others solve it with <Y>?',
			'How do developers work in the normal world?',
			'What are difficulties that developers face in my environment?',
			'How hard is it to do <X>?'
		],
		objectives: [
			'Know what the rest of the world does to solve computer engineering problems',
			'Learn a useful life skill using logic to solve problems',
			'Understand whether what you have around you is good or trash',
			"Opt for the simpler solutions you know people use but which we don't necessarily",
			'Scrutinize billable man effort, fees, proposed work by vendors'
		],
		resources: {
			youtube: [
				'https://youtube.com/embed/pEfrdAtAmqk?si=XbNLZmktdg7oQCis',
				'https://youtube.com/embed/-uleG_Vecis?si=R0MCXM6csXiGXyjD',
				'https://youtube.com/embed/aXOChLn5ZdQ?si=-KXtJPY2mI3pRlIv'
			],
			links: [
				{
					text: 'CS50: Introduction to Computer Science | Harvard University',
					url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science'
				},
				{
					text: 'Fundamentals of Computing Specialization [7 courses] (Rice) | Coursera',
					url: 'https://www.coursera.org/specializations/computer-fundamentals'
				},
				{
					text: 'Computer Science 101 I Stanford Online',
					url: 'https://online.stanford.edu/courses/soe-ycscs101-computer-science-101'
				},
				{
					text: 'Meta Back-End Developer Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/meta-back-end-developer'
				},
				{
					text: 'Meta Front-End Developer Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
				},
				{
					text: 'Introduction to Computer Science and Programming in Python | Electrical Engineering and Computer Science | MIT OpenCourseWare',
					url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/'
				},
				{
					text: 'W3Schools Online Web Tutorials',
					url: 'https://www.w3schools.com/'
				},
				{
					text: 'GeeksforGeeks | A computer science portal for geeks',
					url: 'https://www.geeksforgeeks.org/'
				},
				{
					text: 'Kevin Powell - YouTube',
					url: 'https://www.youtube.com/@KevinPowell'
				},
				{
					text: 'Web Dev Simplified - YouTube',
					url: 'https://www.youtube.com/@WebDevSimplified'
				},
				{
					text: 'Joy of Code - YouTube',
					url: 'https://www.youtube.com/@JoyofCodeDev'
				},
				{
					text: 'BugBytes - YouTube',
					url: 'https://www.youtube.com/@bugbytes3923'
				}
			]
		}
	}
];
