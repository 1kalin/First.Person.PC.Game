#pragma strict
function Start () {

}

function Update () {

}

	function OnTriggerEnter(otherObj: Collider){
    if (otherObj.tag == "Player"){
        GetComponent.<AudioSource>().Play();
    }
}

function OnTriggerExit(otherObj: Collider){
    if (otherObj.tag == "Player"){ 
       GetComponent.<AudioSource>().Play();
    }
    }