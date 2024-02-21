var Consent = "Do you agree to share your personal information with our site?";
var nickname = "Karen";
var heightInch = 62;
var weightKg = 50;

if(confirm(Consent)==true){
    alert
    (
        "Name: " + nickname + "\nHeight: " + (heightInch/12) + (heightInch % 12)  + "”" + "\nWeight: " + weightKg*2.205 + " lbs"
    );
}

else{
    alert("“User does not wish to share his/her information.”")
}