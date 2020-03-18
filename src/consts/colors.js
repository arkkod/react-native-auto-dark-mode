const colors = {
    dark: {
        background: "#333",
        text: "#f9f9f9",
        statusBarBackground: "#222",
        statusBarStyle: "light-content",
        buttonBackground: "#000",
        buttonText: "#fff"
    },
    light: {
        background: "#f9f9f9",
        text: "#333",
        statusBarBackground: "#ddd",
        statusBarStyle: "dark-content",
        buttonBackground: "#afafaf",
        buttonText: "#000"
    }
}

function get_color(color){
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    if((hour >= 19 && minute >= 30) || (hour <= 5)){
        return colors.dark[color];
    }else{
        return colors.light[color];
    }
}

export {colors, get_color}