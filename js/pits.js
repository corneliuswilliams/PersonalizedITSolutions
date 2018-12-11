function getAboutInfo()
{
    /* variables set for firstName, middleName, lastName and websiteType elements from about.html page */
    let fName = 'Cornelius';
    let mName = 'Andre';
    let lName = 'Williams';
    let website = ['E-commerce', 'Personal', 'Political', 'News', 'Corporate', 'Consultation', 'Community Building', 'Shopping'];

    /* getting the elements by ID from about.html page and setting them to the values in variables, "fName, mName and lName. */
    let elFName = document.getElementById('firstName');
    elFName.textContent = fName;
    let elMName = document.getElementById('middleName');
    elMName.textContent = mName;
    let elLName = document.getElementById('lastName');
    elLName.textContent = lName;
    let elWebsite = document.getElementById('websiteType');
    elWebsite.textContent = website[6 ];
}

/* function call to send data to about.html */
getAboutInfo();

