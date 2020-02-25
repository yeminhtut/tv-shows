import listTransformer from './transformers/list'
import detailTransformer from './transformers/detail'
import seasonTransformer from './transformers/season'

const transformApiToState = (type, state = {}) => data => {
    switch (type) {
        case 'list':
            return listTransformer.toState(data, state)

        case 'detail':
            return detailTransformer.toState(data, state)

        case 'season':
            return seasonTransformer.toState(data, state)

        default:
            return {}
    }
}

export { transformApiToState }
