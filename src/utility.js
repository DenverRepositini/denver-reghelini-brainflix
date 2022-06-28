

const formatDate = (unformattedDate) => {
    let today = new Date(unformattedDate);

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let formattedDate = month + '/' + day + '/' + year

    return formattedDate;
}

export default formatDate;