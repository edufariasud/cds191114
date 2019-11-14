    function nomeBar() {
                switch(Math.floor((Math.random() * 10) + 1)) {
            case 1:
                x = "do Zé";
                break;
            case 2:
                x = "do Cleobaldo";
                break;
            case 3:
                x = "da Pinga Certa";
                break;
            case 4:
                x = "do Tonho";
                break;
            case 5:
                x = "Beber, Cair e Levantar.";
                break;
            case 6:
                x = "do Suvaco Cabeludo";
                break;
            case 7:
                x = "Bebeu Morreu";
                break;
            case 8:
                x = "To no Trabalho";
                break;
            
            default:
            x = "do Euzébio";
}
                document.getElementById("txt").innerHTML = "Bar " + x;
            }