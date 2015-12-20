function closest( $elem, selector ) {
    var $matches;

    // loop through parents
    while ( $elem && $elem !== document ) {
        // find all siblings that match the selector
        $matches = $elem.parentNode.querySelectorAll(selector);
        // check if our element is matched (poor-man's Element.matches())
        if ([].indexOf.call($matches, $elem) !== -1) return $elem;

        // go up the tree
        $elem = $elem.parentNode;
    }

    return null;
}

module.exports = {
    closest: closest
};