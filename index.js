function square(num) {
    if (undefined == num || null == num){
        return null;
    }
    return num * num;
}


module.exports = {
    square: square
}

