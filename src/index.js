var ruudut = new Array(5);
ruudut[0] = new Array(5);
ruudut[1] = new Array(5);
ruudut[2] = new Array(5);
ruudut[3] = new Array(5);
ruudut[4] = new Array(5);


//Sijoitetaan arvot:eka rivi
ruudut[0][0] = 0;
ruudut[0][1] = 0;
ruudut[0][2] = 0;
ruudut[0][3] = 0;
ruudut[0][4] = 0;

//Sijoitetaan arvot:toka rivi
ruudut[1][0] = 0;
ruudut[1][1] = 0;
ruudut[1][2] = 0;
ruudut[1][3] = 0;
ruudut[1][4] = 0;

//Sijoitetaan arvot:kolmas rivi
ruudut[2][0] = 0;
ruudut[2][1] = 0;
ruudut[2][2] = 0;
ruudut[2][3] = 0;
ruudut[2][4] = 0;

//Sijoitetaan arvot:neljäs rivi
ruudut[3][0] = 0;
ruudut[3][1] = 0;
ruudut[3][2] = 0;
ruudut[3][3] = 0;
ruudut[3][4] = 0;

//Sijoitetaan arvot:viides rivi
ruudut[4][0] = 0;
ruudut[4][1] = 0;
ruudut[4][2] = 0;
ruudut[4][3] = 0;
ruudut[4][4] = 0;


document.getElementById('demo').innerHTML = "Pelaajan 1 vuoro!";


let vuoro = 1;     //1 kun pelaaja 1 ja 2 kun pelaaja 2


function Funktio(ruudut)
{

    var found = false;

    //tarkistetaan vaakarivit ja pystyrivit
    for( i = 0 ; i < 5 ; i++){  //

        //ensin tarkistetaan vaakarivit
        if(  ruudut[i][0] == 1 && ruudut[i][1] == 1 && ruudut[i][2] == 1 && ruudut[i][3] == 1 && ruudut[i][4] == 1){
            found = true;
        }
        if(  ruudut[i][0] == 2 && ruudut[i][1] == 2 && ruudut[i][2] == 2 && ruudut[i][3] == 2 && ruudut[i][4] == 2){
            found = true;
        }

        //sitten tarkistetaan pystyrivit
        if(  ruudut[0][i] == 1 && ruudut[1][i]==1 && ruudut[2][i]==1 && ruudut[3][i] == 1 && ruudut[4][i] == 1){
            found = true;
        }
        if(  ruudut[0][i] == 2 && ruudut[1][i]==2 && ruudut[2][i]==2 && ruudut[3][i] == 2 && ruudut[4][i] == 2){
            found = true;
        }

    }  // for loppuu

    //tarkistetaan vinot pystyrivit
    if(  ruudut[0][0] == 1 && ruudut[1][1] == 1 && ruudut[2][2] == 1 && ruudut[3][3] == 1 && ruudut[4][4] == 1){
        found = true;
    }
    if(  ruudut[0][0] == 2 && ruudut[1][1] == 2 && ruudut[2][2] == 2 && ruudut[3][3] == 2 && ruudut[4][4] == 2){
        found = true;
    }
    if( ruudut[0][4] == 1 && ruudut[1][3] == 1 && ruudut[2][2] == 1 && ruudut[3][1] == 1 && ruudut[4][0] == 1){
        found = true;
    }
    if( ruudut[0][4] == 2 && ruudut[1][3] == 2 && ruudut[2][2] == 2 && ruudut[3][1] == 2 && ruudut[4][0] == 2){
        found = true;
    }

    //funktion palautus
    if(found == true) return 1;
    else return 0;

}


let count = 0; //laskee monta klikkausta tehty

function tarkistaTaulukko(id)
{

    let tulos;

    let elementti = document.getElementById( id );

    if( ruudut[id[0]][id[1]]==0) {

        if( vuoro == 1){
            ruudut[id[0]][id[1]] = 1;
            elementti.innerHTML = "X";
            tulos = Funktio(ruudut);
            if(tulos == 1){
                document.getElementById('demo').innerHTML = "Pelaaja 1 voitti!";
                alert("Pelaaja 1 voitti!");
                return;
            }

        }
        if( vuoro == 2){
            ruudut[id[0]][id[1]] = 2;
            elementti.innerHTML = "O";
            tulos = Funktio(ruudut);
            if(tulos == 1){
                document.getElementById('demo').innerHTML = "Pelaaja 2 voitti!";
                alert("Pelaaja 2 voitti");
                return;
            }

        }
        count = count + 1;

        if(count == 25){
                document.getElementById('demo').innerHTML = "Tasapeli!";
                return;
        }


        if(vuoro == 1) {
                vuoro = 2;
                document.getElementById('demo').innerHTML = "Pelaajan 2 vuoro!";
        }
        else if (vuoro == 2) {
                vuoro = 1;
                document.getElementById('demo').innerHTML = "Pelaajan 1 vuoro!";
        }


        return;
    }




    return;
}
