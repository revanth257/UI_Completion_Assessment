function sub()
{   
    //Name, Age, Gender, City, Hobbies
    const name=document.getElementById("name").value;
    let age=document.getElementById("age").value;

    const male=document.getElementById("male");
    const female=document.getElementById("female");

    const city=document.getElementById("city").value;

    const painting=document.getElementById("painting");
    const dancing=document.getElementById("dancing");
    const sports=document.getElementById("sports");

    if(name=="" || age=="" || (male.checked==false && female.checked==false) || city=="" || (painting.checked==false && dancing.checked==false && sports.checked==false))
    {
        alert("all feilds are Manadatory")
    }
    else{

        //Name Output
        document.getElementById("name_value").innerHTML="Name : "+name;
        if(name.length<=20 && /\d/.test(name)==false && name!=""){
            document.getElementById("name_value").innerHTML="Name : "+name;
        }else{
            document.getElementById("name_value").innerHTML="Name : Invalid";
        }

        //Age output
        if(age<=100 && age>0){
            document.getElementById("age_value").innerHTML="Age : "+age;
        }else{
            document.getElementById("age_value").innerHTML="Age : Invalid"
        }

        //Gender output
        if(male.checked){
            document.getElementById("gender_value").innerHTML="Gender : "+male.value;
        }else if(female.checked){
            document.getElementById("gender_value").innerHTML="Gender : "+female.value;
        }else{
            document.getElementById("gender_value").innerHTML="Gender : Invalid"
        }

        //city output
        if(city==""){
            document.getElementById("city_value").innerHTML="City : Invalid"
        }else{
        document.getElementById("city_value").innerHTML="City : "+city;
        }

        //Hobbies output
        if(painting.checked && dancing.checked && sports.checked){
            document.getElementById("hobbies_value").innerHTML="Hobbies : "+painting.value+"#"+dancing.value+"#"+sports.value+"#";
        }else if(painting.checked && dancing.checked){
            document.getElementById("hobbies_value").innerHTML="Hobbies : "+painting.value+"#"+dancing.value+"#";
        }else if(painting.checked && sports.checked){
            document.getElementById("hobbies_value").innerHTML="Hobbies : "+painting.value+"#"+sports.value+"#";
        }else if(dancing.checked && sports.checked){
            document.getElementById("hobbies_value").innerHTML="Hobbies : "+dancing.value+"#"+sports.value+"#";
        }else if(painting.checked){
            document.getElementById("hobbies_value").innerHTML="Hobbies : #"+painting.value;
        }else if(dancing.checked){
            document.getElementById("hobbies_value").innerHTML="Hobbies : #"+dancing.value;
        }else if(sports.checked){
            document.getElementById("hobbies_value").innerHTML="Hobbies : #"+sports.value;
        }else{
            document.getElementById("hobbies_value").innerHTML="Hobbies : Invalid"
        }
    }
}
