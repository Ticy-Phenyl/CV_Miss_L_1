const theme = document.querySelectorAll('.theme');


theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "violetTheme", "blueTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "violet":
                document.body.classList.add("violetTheme");
                break;
            case "blue":
                document.body.classList.add("blueTheme");
                break;
            case "white":
                document.body.classList.add("defaultTheme");
                break;
        }
    })
})