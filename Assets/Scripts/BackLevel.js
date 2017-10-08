var levelIndexToLoad : int = 1;
var timeToWait : float = 30.0f;
function Start(){
 
LoadLevelAfterTime();
}
 
function LoadLevelAfterTime(){
yield WaitForSeconds(timeToWait);
Application.LoadLevel(levelIndexToLoad);
levelIndexToLoad++;
}