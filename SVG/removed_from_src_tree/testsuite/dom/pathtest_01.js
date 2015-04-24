function RandomInt(max)
{
    return Math.floor(max * Math.random());
}

function SelectPathList(pathelm)
{
    switch (RandomInt(2))
    {
    default:
    case 0:
	return pathelm.pathSegList;
    case 1:
	return pathelm.normalizedPathSegList;
    }
}

function CreateSegment()
{
    var elm = document.getElementById("mypath");

    switch (1+RandomInt(2))
    {
    default:
    case 0:
	return elm.createSVGPathSegMovetoAbs(RandomInt(480),RandomInt(360));
    case 1:
	return elm.createSVGPathSegLinetoAbs(RandomInt(480),RandomInt(360));
    case 2:
	return elm.createSVGPathSegCurvetoCubicAbs(RandomInt(480),RandomInt(360), RandomInt(480),RandomInt(360), RandomInt(480),RandomInt(360));
    }
}

function SelectIndex(pathlist)
{
    return 1+RandomInt(pathlist.numberOfItems-1);
}

function ExerciseInsert(pathlist)
{
    pathlist.insertItemBefore(CreateSegment(), SelectIndex(pathlist));
}

function ExerciseRemove(pathlist)
{
    pathlist.removeItem(SelectIndex(pathlist));
}

function ExerciseReplace(pathlist)
{
    pathlist.replaceItem(CreateSegment(), SelectIndex(pathlist));
}

function ExerciseAppend(pathlist)
{
    pathlist.appendItem(CreateSegment());
}

function ExerciseClear(pathlist)
{
    pathlist.clear();
}

function UpdateLengths(pathelm)
{
    var denorm = document.getElementById("denorm");
    var norm = document.getElementById("norm");

    denorm.firstChild.data = pathelm.pathSegList.numberOfItems;
    norm.firstChild.data = pathelm.normalizedPathSegList.numberOfItems;
}

function RunTest()
{
    var pathelm = document.getElementById("mypath");

    for (var i = 0; i < 20; ++i)
    {
		ExerciseInsert(SelectPathList(pathelm));
		ExerciseAppend(SelectPathList(pathelm));
		ExerciseReplace(SelectPathList(pathelm));
		ExerciseRemove(SelectPathList(pathelm));
    }

	//ExerciseClear(SelectPathList(pathelm));

    //UpdateLengths(pathelm);
}
