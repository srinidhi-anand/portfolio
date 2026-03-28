
export const skillsData = [
    {
        type: 'FrontEnd',
        list: [
            { icon: <i className="devicon-react-plain colored text-6xl" />, name: 'ReactJS' },
            { icon: <i className="devicon-nextjs-plain colored text-6xl" />, name: 'Next.js' },
            { icon: <i className="devicon-tailwindcss-plain colored text-6xl" />, name: 'TailwindCSS' },
            { icon: <i className="devicon-bootstrap-plain colored text-6xl" />, name: 'Bootstrap' },
            { icon: <i className="devicon-angularjs-plain colored text-6xl" />, name: 'AngularJS' },
            { icon: <i className="devicon-ionic-original colored text-6xl" />, name: 'Ionic' },
            { icon: <i className="devicon-html5-plain colored text-6xl" />, name: 'HTML5' },
            { icon: <i className="devicon-css3-plain colored text-6xl" />, name: 'CSS3' },
            { icon: <i className="devicon-typescript-plain colored text-6xl" />, name: 'Typescript' },
            { icon: <i className="devicon-jquery-plain colored text-6xl" />, name: 'jQuery' },
        ],
    },
    {
        type: 'Backend & APIs',
        list: [
            { icon: <i className="devicon-nodejs-plain colored text-6xl" />, name: 'Node.js' },
            { icon: <i className="devicon-python-plain colored text-6xl" />, name: 'Python (Kivy)' },
            { icon: <i className="devicon-django-plain colored text-6xl" />, name: 'Python (Django)' },
            { icon: <i className="devicon-flask-plain colored text-6xl" />, name: 'Python (Flask)' },
            { icon: <i className="devicon-fastapi-plain colored text-6xl" />, name: 'Python (FastAPI)' },
            { icon: <i className="devicon-r-plain colored text-6xl" />, name: 'R' },
        ],
    },
    {
        type: 'API Testing & Integration',
        list: [
            {
                icon: <i className="devicon-postman-plain colored text-6xl" />,
                name: 'Postman'
            }
        ]
    },
    {
        type: 'Containerization',
        list: [
            {
                icon: <i className="devicon-docker-plain colored text-6xl" />,
                name: 'Docker'
            },
            {
                icon: <i className="devicon-kubernetes-plain colored text-6xl" />,
                name: 'Kubernetes'
            }
        ]
    },
    {
        type: 'Project Management Tools',
        list: [
            {
                icon: <i className="devicon-jira-plain colored text-6xl" />,
                name: 'Jira'
            },
            {
                icon: <i className="devicon-notion-plain text-6xl" />,
                name: 'Notion'
            },
        ]
    },
    {
        type: 'Version Control System',
        list: [
            {
                icon: <i className="devicon-git-plain colored text-6xl" />,
                name: 'Git'
            },
            {
                icon: <i className="devicon-github-plain colored text-6xl" />,
                name: 'GitHub'
            },
            {
                icon: <i className="devicon-gitlab-plain colored text-6xl" />,
                name: 'GitLab'
            }
        ]
    },
    {
        type: 'Database',
        list: [
            {
                icon: <i className="devicon-microsoftsqlserver-plain colored text-6xl" />,
                name: 'Microsoft SQL Server'
            },
            {
                icon: <i className="devicon-mysql-plain colored text-6xl" />,
                name: 'MySQL'
            },
            {
                icon: <i className="devicon-mongodb-plain colored text-6xl" />,
                name: 'MongoDB'
            },
            {
                icon: <i className="devicon-postgresql-plain colored text-6xl" />,
                name: 'PostgreSQL'
            }
        ]
    },
    {
        type: 'Cloud Services',
        list: [
            {
                icon: <i className="devicon-amazonwebservices-plain-wordmark colored text-6xl" />,
                name: 'AWS'
            },
            {
                icon: <i className="devicon-azure-plain colored text-6xl" />,
                name: 'Azure'
            }
        ]
    },
    {
        type: 'Operating Systems',
        list: [
            {
                icon: <i className="devicon-windows11-original colored text-6xl" />,
                name: 'Windows'
            },
            {
                icon: <i className="devicon-apple-original colored text-6xl" />,
                name: 'MacOS'
            },
            {
                icon: <i className="devicon-linux-plain colored text-6xl" />,
                name: 'Linux'
            }
        ]
    },
]

export const skills = {
    "Core Stack": {
        expert: ["Next.js", "React.js", "Node.js", "Python (FastAPI)", "Python (Django)"],
        prof: ["TypeScript", "TailwindCSS", "Python (Flask)", "Python (Kivy)", "JQuery"],
        learn: ["Ionic", "AngularJS"]
    },
    "AI / Computer Vision": {
        expert: ["OpenCV", "CNN Architecture"],
        prof: ["TensorFlow", "Deep learning", "Emotion Detection (CV)"],
        learn: ["PyTorch", "LLM Integration"]
    },
    "Database": {
        expert: ["PostgreSQL", "MongoDB", "MySQL"],
        prof: ["Microsoft SQL Server"]
    },
    "Cloud & DevOps": {
        expert: ["AWS", "Docker"],
        prof: ["Azure", "Kubernetes", "GitHub Actions", "CI/CD"],
        learn: ["GCP"]
    },
    "Tools": {
        expert: ["Git", "GitHub", "Postman", "Bruno", "Jira"],
        prof: ["Notion", "GitLab"]
    }
}