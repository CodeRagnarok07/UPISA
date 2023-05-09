


const createImg = (node) => {

    console.log("hola mundo");
    const { body } = document

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.height = 100

    const tempImg = document.createElement('img')


    tempImg.addEventListener('load', onTempImageLoad)
    const xtmlImg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
    
${node}


    </div>
    
    </foreignObject></svg>`

    tempImg.src = 'data:image/svg+xml,' + encodeURIComponent(xtmlImg)
    const targetImg = document.createElement('img')
    body.appendChild(targetImg)

    function onTempImageLoad(e) {
        ctx.drawImage(e.target, 0, 0)
        targetImg.src = canvas.toDataURL()
        console.log(tempImg.src);

    }

}

const createimg = document.getElementById("createimg")


const result_calculadora = document.getElementById("result_calculadora")

var yourString = new XMLSerializer().serializeToString(result_calculadora);


createimg.onclick = () => createImg(result_calculadora.outerHTML)


