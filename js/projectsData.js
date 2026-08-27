export const projects = [
    {
        id: "ble-vehicle",
        title: "Bluetooth Low Energy (BLE) Smart Vehicle",
        category: "Hardware / Embedded",
        summary: "Remote-controlled robotic vehicle. Uses Bluetooth Low Energy for real-time motor and sound telemetry.",
        stack: ["Arduino Uno R4 WiFi", "C++", "BLE (Bluetooth 5.0)", "Motor Shield", "Hardware Debugging"],
        demoLink: "#",
        repoLink: "https://github.com/rdn91/RC-BLE-Car",
        highlights: [
            "Configured bi-directional BLE custom GATT services and characteristics for sub-30ms joystick input response.",
            "Designed physical power isolation circuits to prevent DC motor inductive flyback from resetting the microcontroller logic board.",
            "Implemented an integrated sound playback module triggered dynamically by movement state machines."
        ]
    },
    {
        id: "steal-or-split",
        title: "Asynchronous Steal or Split API (Unfinished)",
        category: "Full-Stack Backend Architecture",
        summary: "Asynchronous backend microservice. Handles real-time state synchronization for a multiplayer game.",
        stack: ["Python", "FastAPI", "WebSockets", "Asyncio"],
        demoLink: "#",
        repoLink: "https://github.com/rdn91/steal-or-split",
        highlights: [
            "Built asynchronous event-loop connection managers to support multi-client real-time broadcasting.",
            "Structured error recovery and JSON message validation.",
            "Scaled game session state across multiple concurrent rooms."
        ]
    },
    {
        id: "boba-drops",
        title: "Boba Drops — Minecraft-Themed Web Audio Player",
        category: "Interactive Frontend Application",
        summary: "Retro web audio player. Features custom media controls, track visualization, and dynamic playlist loading.",
        stack: ["Vanilla JavaScript (ES6+)", "HTML5 Web Audio API", "CSS Grid/Flexbox", "localStorage"],
        demoLink: "https://rdn91.github.io/minecraftdiscsplayer/",
        repoLink: "https://github.com/rdn91/boba-drops",
        highlights: [
            "Engineered a custom media playback engine with zero third-party framework dependencies.",
            "Built custom volume gain controls, track progress scrubbing, and localized playback memory using localStorage.",
            "Achieved 100/100 Lighthouse performance and accessibility scores via semantic DOM manipulation."
        ]
    },
    {
        id: "homelab",
        title: "Self-Hosted Homelab Infrastructure Stack",
        category: "Systems Administration & Networking",
        summary: "Bare-metal private cloud. Manages network security, storage, and containerized web hosting.",
        stack: ["Debian/Ubuntu Linux", "Docker", "Nginx Reverse Proxy", "Pi-hole DNS", "Tailscale / WireGuard", "Samba"],
        demoLink: "#",
        repoLink: "https://github.com/rdn91/personal-laptop-server-project",
        highlights: [
            "Configured local DNS sinkholing via Pi-hole and secure split-tunnel VPN meshes with Tailscale/WireGuard.",
            "Deployed Nginx reverse proxies with SSL termination to route traffic across local microservices.",
            "Managed persistent network-attached storage (Samba) with automated snapshot backups."
        ]
    },
    {
        id: "turtle-crossing",
        title: "Turtle Road Crossing Game",
        category: "Python Software Development",
        summary: "Arcade-style game built with Python's Turtle graphics.",
        stack: ["Python", "Turtle Graphics", "OOP"],
        demoLink: "#",
        repoLink: "https://github.com/rdn91/turtle_road_crossing_game_python",
        highlights: [
            "Applied Object-Oriented Programming (OOP) and class inheritance in Python.",
            "Implemented game loop architectures with collision detection algorithms.",
            "Managed state for multiple moving entities dynamically on screen."
        ]
    },
    {
        id: "pong-game",
        title: "Python Pong Game",
        category: "Python Software Development",
        summary: "Pong clone built with Python.",
        stack: ["Python", "Turtle Graphics"],
        demoLink: "#",
        repoLink: "https://github.com/rdn91/pong_game_using_python_turtle_graphics",
        highlights: [
            "Applied OOP principles to manage separate logic for paddles, balls, and scoreboards.",
            "Handled real-time user keyboard inputs for smooth paddle movement.",
            "Programmed ball physics including bouncing mechanics and speed increments."
        ]
    }
];

export const skills = [
    {
        category: "Languages",
        items: ["Python", "JavaScript (ES6+)", "HTML5", "Modern CSS3"]
    },
    {
        category: "Backend & Web",
        items: ["FastAPI", "WebSockets", "REST APIs", "Node.js (tooling)", "Asyncio"]
    },
    {
        category: "Hardware & IoT",
        items: ["Arduino (Uno R4, Nano)", "ESP32", "Raspberry Pi (Zero 2W)", "BLE", "I2C", "SPI", "UART"]
    },
    {
        category: "Electronics & Bench",
        items: ["Circuit Wiring", "Component Soldering", "Multimeter Diagnostics", "Thermal Management"]
    },
    {
        category: "Systems & DevOps",
        items: ["Linux (Debian, Ubuntu)", "Docker", "Nginx", "Git", "GitHub", "Tailscale", "WireGuard", "Pi-hole"]
    }
];

export const hardwareLab = [
    {
        title: "The Electronics Workbench",
        description: "Hands-on diagnostic work, display repairs, circuit breadboarding, and microcontroller wiring."
    },
    {
        title: "Continuous Computer Science Research",
        description: "Topics actively explored through technical research papers, deep-dive teardown videos, and practical implementation (e.g., Low-level computer architecture, binary logic, network routing protocols)."
    }
];

export const leadership = [
    {
        title: "McKinsey Forward Program Graduate",
        description: "Practical problem-solving, digital business agility, structured communication, and adaptable leadership frameworks."
    },
    {
        title: "Hack Club Participant",
        description: "Organized a workshop about computer architecture."
    },

    {
        title: "Language Proficiencies",
        description: "Native Arabic, Fluent English (B2/C1), Elementary Spanish (A1/A2)."
    }
];
