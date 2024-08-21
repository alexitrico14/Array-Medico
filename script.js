// HORA	ESPECIALISTA	PACIENTE	RUT	PREVISION
// 11:00	IGNACIO SCHULZ	FRANCISCA ROJAS	9878782-1	FONASA
// 11:30	FEDERICO SUBERCASEAUX	PAMELA ESTRADA	15345241-3	ISAPRE
// 15:00	FERNANDO WURTHZ	ARMANDO LUNA	16445345-9	ISAPRE
// 15:30	ANA MARIA GODOY	MANUEL GODOY	17666419-0	FONASA
// 16:00	PATRICIA SUAZO	RAMON ULLOA	14989389-K	FONASA

let radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        rut: 9878782-1,
        paciente: "FRANCISCA ROJAS",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",  
        rut: 15345241-3,
        paciente: "PAMELA ESTRADA",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",  
        especialista: "FERNANDO WURTHZ",
        rut: 16445345-9,
        paciente: "ARMANDO LUNA",
        prevision: "ISAPRE",    
    },
    {   
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        rut: 17666419-0,
        paciente: "MANUEL GODOY",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        rut: "14989389-K",
        paciente: "RAMON ULLOA",
        prevision: "FONASA",
    },
]


// HORA	ESPECIALISTA	PACIENTE	RUT	PREVISION
// 8:00	MARIA PAZ ALTUZARRA	PAULA SANCHEZ	15554774-5	FONASA
// 10:00	RAUL ARAYA	ANGÉLICA NAVAS	15444147-9	ISAPRE
// 10:30	MARIA ARRIAGADA	ANA KLAPP	17879423-9	ISAPRE
// 11:00	ALEJANDRO BADILLA	FELIPE MARDONES	1547423-6	ISAPRE
// 11:30	CECILIA BUDNIK	DIEGO MARRE	16554741-K	FONASA
// 12:00	ARTURO CAVAGNARO	CECILIA MENDEZ	9747535-8	ISAPRE
// 12:30	ANDRES KANACRI	MARCIAL SUAZO	11254785-5	ISAPRE

let traumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        rut: 15554774-5,
        paciente: "PAULA SANCHEZ",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        rut: 15444147-9,
        paciente: "ANGÉLICA NAVAS",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        rut: 17879423-9,
        paciente: "ANA KLAPP",  
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        rut: 1547423-6,
        paciente: "FELIPE MARDONES",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        rut: "16554741-K",
        paciente: "DIEGO MARRE",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        rut: 9747535-8,
        paciente: "CECILIA MENDEZ",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        rut: 11254785-5,
        paciente: "MARCIAL SUAZO",
        prevision: "ISAPRE",
    },
]


// HORA	ESPECIALISTA	PACIENTE	RUT	PREVISION
// 8:30	ANDREA ZUÑIGA	MARCELA RETAMAL	11123425-6	ISAPRE
// 11:00	MARIA PIA ZAÑARTU	ANGEL MUÑOZ	9878789-2	ISAPRE
// 11:30	SCARLETT WITTING	MARIO KAST	7998789-5	FONASA
// 13:00	FRANCISCO VON TEUBER	KARIN FERNANDEZ	18887662-K	FONASA
// 13:30	EDUARDO VIÑUELA	HUGO SANCHEZ	17665461-4	FONASA
// 14:00	RAQUEL VILLASECA	ANA SEPULVEDA	14441281-0	ISAPRE

let dental = [
    {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        rut: 11123425-6,
        paciente: "MARCELA RETAMAL",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",  
        rut: 9878789-2,
        paciente: "ANGEL MUÑOZ",    
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        rut: 7998789-5,
        paciente: "MARIO KAST",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        rut: "18887662-K",
        paciente: "KARIN FERNANDEZ",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        rut: 17665461-4,
        paciente: "HUGO SANCHEZ",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        rut: "14441281-0",
        paciente: "ANA SEPULVEDA",
        prevision: "ISAPRE",
    },
]
document.write('<h1>Estadisticas centro medico ñuñoa</h1>');

document.write("<h2>Radiologia</h2>");
document.write(`Primera Atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} |Última Atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}`);

document.write("<h2>Traumatologia</h2>");
document.write(`Primera Atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} |Última Atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`);

document.write("<h2>Dental</h2>");
document.write(`Primera Atención: ${dental[0].paciente} - ${dental[0].prevision} |Última Atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}`);

// imprimir tabla en el texto

function TablaRadio(){
    let texto = "<tr><th>Hora</th><th>Especialista</th><th>Rut</th><th>Pacientente</th><th>Prevision</th></tr>";
    for (let i = 0; i < radiologia.length; i++) {
            texto += `<tr>
                      <td>${radiologia[i].hora}</td>
                      <td>${radiologia[i].especialista}</td>
                      <td>${radiologia[i].rut}</td>
                      <td>${radiologia[i].paciente}</td>
                      <td>${radiologia[i].prevision}</td>
                  </tr>`;
        }
    
        document.getElementById("tabla-radio").innerHTML = `</br> ${texto}`;
    
}    

function TablaTrauma(){
    let texto = "<tr><th>Hora</th><th>Especialista</th><th>Rut</th><th>Pacientente</th><th>Prevision</th></tr>";
for (let j = 0; j < traumatologia.length; j++) {
    texto += `<tr>
    <td>${traumatologia[j].hora}</td>
    <td>${traumatologia[j].especialista}</td>
    <td>${traumatologia[j].rut}</td>
    <td>${traumatologia[j].paciente}</td>
    <td>${traumatologia[j].prevision}</td>
    </tr>`;
}
document.getElementById("tabla-trauma").innerHTML =`</br> ${texto}`;

}

function TablaDental(){
    let texto = "<tr><th>Hora</th><th>Especialista</th><th>Rut</th><th>Pacientente</th><th>Prevision</th></tr>";
for (let k = 0; k < dental.length; k++) {
    texto += `<tr>
    <td>${dental[k].hora}</td>
    <td>${dental[k].especialista}</td>
    <td>${dental[k].rut}</td>
    <td>${dental[k].paciente}</td>
    <td>${dental[k].prevision}</td>
    </tr>`;


}
document.getElementById("tabla-dental").innerHTML = `</br> ${texto}`;

}

TablaTrauma();
TablaDental();
TablaRadio();