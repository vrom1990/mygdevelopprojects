gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code = {};
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDbackbuttonObjects1= [];
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDbackbuttonObjects2= [];
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDlooooooooserObjects1= [];
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDlooooooooserObjects2= [];

gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.conditionTrue_0 = {val:false};
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition0IsTrue_0 = {val:false};
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition1IsTrue_0 = {val:false};


gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.mapOfGDgdjs_46_951055_951088_951086_951080_951075_951088_951072_951083_9533Code_46GDbackbuttonObjects1Objects = Hashtable.newFrom({"backbutton": gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDbackbuttonObjects1});gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.eventsList0x6c603c = function(runtimeScene) {

{


gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition0IsTrue_0.val = false;
{
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Стартовая сцена", false);
}}

}


}; //End of gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.eventsList0x6c603c
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.eventsList0xb5aa0 = function(runtimeScene) {

{

gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDbackbuttonObjects1.createFrom(runtimeScene.getObjects("backbutton"));

gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition0IsTrue_0.val = false;
{
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.mapOfGDgdjs_46_951055_951088_951086_951080_951075_951088_951072_951083_9533Code_46GDbackbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.eventsList0x6c603c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.eventsList0xb5aa0


gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDbackbuttonObjects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDbackbuttonObjects2.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDlooooooooserObjects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.GDlooooooooserObjects2.length = 0;

gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['_1055_1088_1086_1080_1075_1088_1072_1083_33Code'] = gdjs._1055_1088_1086_1080_1075_1088_1072_1083_33Code;
