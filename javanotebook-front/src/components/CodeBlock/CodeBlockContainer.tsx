import { connect } from "react-redux";

// import { push } from 'connected-react-router';

import { StyledCodeBlock } from './CodeBlock';

import { IStore } from '../../interfaces';

import { COMMANDS_ACTIONS } from '../../store/commands';

const mapStateToProps = (state: IStore) => {
    return {
        getCode: (id: number) => {
            if (state.commandReducer.codeBlocks && state.commandReducer.codeBlocks[id]) {
                return state.commandReducer.codeBlocks[id].codeContent;
            }
            return '// Enter your code here';
        },
        getCodeOutput: (id: number) => {
            if (state.commandReducer.codeBlocks && state.commandReducer.codeBlocks[id]) {
                return state.commandReducer.codeBlocks[id].codeOutput;
            }
            return null;
        },
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    changeCodeContent: (id: number, codeContent: string) => dispatch(COMMANDS_ACTIONS.changeCodeContent({id, codeContent})),
    getCodeSnippetRequest: (id: number, idSnippet: number) => dispatch(COMMANDS_ACTIONS.getCodeSnippetRequest({id, idSnippet})),
    processCommandRequest: (command: string, id: number) => dispatch(COMMANDS_ACTIONS.processingCommandRequest({command, id})),
    saveCodeSnippetRequest: (codeSnippetContent: string, codeSnippetName: string) => 
        dispatch(COMMANDS_ACTIONS.saveCodeSnippetRequest({codeSnippetContent, codeSnippetName})),
});

export default connect(mapStateToProps, mapDispatchToProps)(StyledCodeBlock);