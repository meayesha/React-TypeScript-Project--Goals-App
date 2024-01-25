import {type ReactNode} from 'react';

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type WarningBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox(props: InfoBoxProps){
    //this is for either information or giving a warning
    const {mode, children} = props;
    if(mode === 'hint') {
        return (<aside className="infobox infobox-hint">
        <p>{children}</p>
    </aside>
        );
    }
    const {severity} = props;
    return (
     <aside className={`infobox infobox-warning--${severity}`}>
      {mode === 'warning'? <h2>Warning</h2> : null}
        <p>{children}</p>
    </aside>
    );
}