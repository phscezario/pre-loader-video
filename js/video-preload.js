/**
 * Plugin criado por:
 * Paulo Cezario
 * https://github.com/phscezario
 **/
(function() {
    const videoToLoad = document.querySelectorAll('.youtube-player');
    
    if(videoToLoad !== null) {
        videoToLoad.forEach(element => {
            const id = element.getAttribute('id');
            const div = document.createElement('div');
            const iframe = document.createElement('iframe');
    
            // Endereço das miniaturas do Youtube, depois busca ID do objeto
            const thumb = `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg">`;
    
            const play = `<div class="play"><img src="images/youtube-play.png"/></div>`;
    
            div.innerHTML = thumb + play;
            element.appendChild(div);
    
            // Adiciona um ouvinte de clique, assim ele apenas carregará o video após clicar na div
            element.addEventListener('click', () => {
                iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allowfullscreen', '1');
                element.innerHTML = '';
                element.appendChild(iframe);
            });
        });
    }    
})();