const Element = (props) => props.circle
    ? <div />
    : <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />

export default (props) => <Element circle={props.circle} />
