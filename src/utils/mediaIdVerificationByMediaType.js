export const mediaIdVerificationByMediaType = (array, mediaTYPE, mediaID) => {
    const type = mediaTYPE === 'series' ? 'tv' : 'movie';
    const element = array.find(el => el.id === +mediaID);

    return (element?.media_type === type) ? true : false;
}
