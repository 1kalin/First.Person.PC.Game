#pragma strict

function Start () {

}

function Update () {

}



function OnTriggerExit(otherObj: Collider){
    if (otherObj.tag == "Player"){ 
        GetComponent.<AudioSource>().Play();
        Destroy(gameObject, 2);
    }
}