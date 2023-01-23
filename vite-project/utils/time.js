const timeEl = document.querySelector('.time');

export const parseDate = function (unixTime) {
    const t = new Date(unixTime);
    timeEl.textContent = `${t.getFullYear()}-${(t.getMonth() + 1).toString().padStart(2, '0')}-${t.getDate().toString().padStart(2, '0')} ${t.getHours().toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')} :${t.getSeconds().toString().padStart(2, '0')}`
}



