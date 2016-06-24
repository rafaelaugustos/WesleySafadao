$(function(){
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady(){
        checkConnection();
    }
    function checkConnection() {
        var networkState = navigator.connection.type;
        var states = {};
        
        states[Connection.UNKNOWN]  = 'Bloqueada';
        states[Connection.ETHERNET] = 'ETHERNET';
        states[Connection.WIFI]     = 'Wifi';
        states[Connection.CELL_2G]  = '2G';
        states[Connection.CELL_3G]  = '3G';
        states[Connection.CELL_4G]  = '4G';
        states[Connection.CELL]     = 'Generico';
        states[Connection.NONE]     = 'Sem';
        
        alert('Connection type: ' + states[networkState]);
        
        // Aqui a magia acontece
        if(states[networkState] == 'Sem'){
            alert('Sem Internet');
        }else{
            alert('com  Internet');
        }
        console.log(states[networkState]);
    }
   
    
    // Loop
    
    var url = 'http://ideapropaganda.com.br/iposto/';
    var Fuels = localStorage.FuelList;
    function ListarPosto(){
        $.ajax({
            method:'GET',
            url: url+'json.php',
            dataType: 'json',
            success: function(data){
                /*localStorage.FuelList = (JSON.stringify(data));
                Fuels = localStorage.FuelList;*/
                loop(data);
            }

        });
    }  
    ListarPosto();
    
    function loop(result){
        /* Crio o loop dos postos    */
        for(i = 0; i < result.length; i++){
            var id       = result[i].id_posto;
            var nome     = result[i].nome;
            var Logo     = result[i].logo;
            var coordLat = result[i].lat;
            var coordLng = result[i].lng;
            var g        = result[i].g;
            var a        = result[i].a;
            var e        = result[i].e;
            var d        = result[i].d;
            //Fuel(id,nome, Logo, coordLat, coordLng, g, a, e, d);
            $("#tarefas").append('<li>'+nome+'</li>');
            //alert(result[i].city);
            console.log(result);

        }
    }

});