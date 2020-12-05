function subdep() {
    return 123;
}

function common() {
    return "foo" + subdep();
}

export { common as c };
