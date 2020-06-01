const Config = {
    name: "jesse",
    scale: 1,
    Links: [
        [
            "tech",
            [
                ["/g/", "https://boards.4channel.org/g/"],
                ["installgentoo", "https://wiki.installgento.com"],
                ["github", "https://github.com/"]
            ]
        ],
        [
            "school",
            [
                ["classroom", "https://classroom.google.com/u/0/h"],
                ["drive", "https://drive.google.com/u/0/h"]
            ]
        ],
        [
            "social",
            [
                ["twitter", "https://twitter.com"],
                ["discord", "https://discordapp.com"]
            ]
        ],
        [
            "relax",
            [
                ["youtube", "https://www.youtube.com"],
                ["reddit", "https://old.reddit.com"],
                ["spotify", "https://open.spotify.com"],
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
