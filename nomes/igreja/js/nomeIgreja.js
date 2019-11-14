    function nomeIgreja() {
        switch (Math.floor((Math.random() * 10) + 1)) {
            case 1:
                y = "Comunidade ";
                break;
            case 2:
                y = "Casa ";
                break;
            case 3:
                y = "Assembléia ";
                break;
            case 4:
                y = "Congregação ";
                break;
            case 5:
                y = "Ministério ";
                break;

            default:
                y = "";
        }


        switch (Math.floor((Math.random() * 10) + 1)) {
            case 1:
                x = "de Oração";
                break;
            case 2:
                x = "Batista Nova Vida";
                break;
            case 3:
                x = "Vida Certa";
                break;
            case 4:
                x = "Cristo é o Senhor";
                break;
            case 5:
                x = "Decantalabasai";
                break;
            case 6:
                x = "Cristo Lindo";
                break;
            case 7:
                x = "Vamos para o Céu";
                break;
            case 8:
                x = "da Carroagem de Fogo";
                break;

            case 9:
                x = "Chave do Céu";
                break;

            case 10:
                x = "Vida em Cristo";
                break;

            default:
                x = "Evangélica Nova Vida em Cristo";
        }
        document.getElementById("txt").innerHTML = "Igreja " + y + x;
    }