import React from 'react';

const Link =({className, href, children}) => {
    const onClick =(event) =>{
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({},'',href)//In an HTML document, the history.pushState() method adds an entry to the browser's session history stack.

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);//this is going to cmmunicate  over those  route components that the url has just change
    }
    return <a onClick={onClick} className={className}
            href={href}>{children}</a>;
}
export default Link;