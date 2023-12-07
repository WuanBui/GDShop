function Container(props){
    return(
        <section className={props.class1}>
            <div className="container-xx1">
                {props.children}
            </div>
        </section>
    );
}

export default Container;