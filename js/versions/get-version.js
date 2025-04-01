function getVersion(){
    const v = ver[ver.length - 1]
    console.log(v);
    
    const $ver = document.querySelector('.ver')
    $ver.textContent = `v${v.ver}`
    console.log('Version Comment:', v.ver + ' | ' + v.desc + ' | ' + v.comm)
}
getVersion()

