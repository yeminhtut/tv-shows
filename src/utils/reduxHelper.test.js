import { generateApiActions, generateDefaultState, getLoadingStateName, handleGeneratedApiActions } from './reduxHelper'

describe('getLoadingStateName', () => {
    test('should return right state name', () => {
        expect(getLoadingStateName('CITY', 'GET')).toBe('isLoadingGetCity')
        expect(getLoadingStateName('cItY', 'GET')).toBe('isLoadingGetCity')
        expect(getLoadingStateName('CITY', 'GET_ALL')).toBe('isLoadingGetAllCity')
        expect(getLoadingStateName('CITY', 'Delete')).toBe('isLoadingDeleteCity')
        expect(getLoadingStateName('CITY', 'CREAtE')).toBe('isLoadingCreateCity')
        expect(getLoadingStateName('CITY', 'Update')).toBe('isLoadingUpdateCity')
    })
})

describe('generateApiActions', () => {
    /*
    test('should throw error when action name is invalid', () => {
        expect(() => {
            generateApiActions('CITY', ['HELLO'])
        }).toThrow()
    })*/

    test('should generate right action type and action', () => {
        const result = generateApiActions('CITY', ['GET'])
        const payload = {
            filter: {
                q: 'sg'
            }
        }
        expect(result.CITY_GET_REQUEST('CITY_GET_REQUEST', payload)).toEqual({
            type: 'CITY_GET_REQUEST',
            payload
        })
    })

    test('should generate multiple action types and actions', () => {
        const result = generateApiActions('CITY', ['GET_ALL', 'DELETE'])
        const payload = {
            filter: {
                q: 'sg'
            }
        }
        expect(result.CITY_GET_ALL_REQUEST('CITY_GET_ALL_REQUEST', payload)).toEqual({
            type: 'CITY_GET_ALL_REQUEST',
            payload
        })
        expect(result.CITY_GET_ALL_RESPONSE('CITY_GET_ALL_RESPONSE', null, payload)).toEqual({
            type: 'CITY_GET_ALL_RESPONSE',
            payload,
            error: null
        })
        expect(result.CITY_DELETE_REQUEST('CITY_DELETE_REQUEST', payload)).toEqual({
            type: 'CITY_DELETE_REQUEST',
            payload
        })
        expect(result.CITY_DELETE_RESPONSE('CITY_DELETE_RESPONSE', null, payload)).toEqual({
            type: 'CITY_DELETE_RESPONSE',
            payload,
            error: null
        })
        expect(result.CITY_DELETE_RESPONSE('CITY_DELETE_RESPONSE', 'error', {})).toEqual({
            type: 'CITY_DELETE_RESPONSE',
            payload: {},
            error: 'error'
        })
    })
})

describe('generateDefaultState', () => {
    /*
    test('should throw error when action name is invalid', () => {
        expect(() => {
            generateDefaultState('CITY', ['HELLO'])
        }).toThrow()
    })*/

    test('should generate right default state', () => {
        const result = generateDefaultState('CITY', ['GET'])
        expect(result).toEqual({
            city: {},
            cityList: [],
            isLoadingGetCity: false
        })
    })

    test('should generate right default state for multiple actions', () => {
        const result = generateDefaultState('CITY', ['GET_ALL', 'UPDATE', 'DELETE', 'CREATE'])
        expect(result).toEqual({
            city: {},
            cityList: [],
            isLoadingGetAllCity: false,
            isLoadingDeleteCity: false,
            isLoadingCreateCity: false,
            isLoadingUpdateCity: false
        })
    })
})

describe('handleGeneratedApiActions', () => {
    const state = {
        otherState: false,
        test: []
    }
    test('should not handle the other types', () => {
        expect(
            handleGeneratedApiActions(state, {
                type: 'CUSTOM_ACTION'
            })
        ).toEqual(state)
    })

    test('should handle REQUEST type', () => {
        expect(
            handleGeneratedApiActions(state, {
                type: 'SETTING_CITY_DELETE_REQUEST'
            })
        ).toEqual({
            otherState: false,
            test: [],
            isLoadingDeleteCity: true,
            error: null
        })
    })

    test('should handle RESPONSE type', () => {
        expect(
            handleGeneratedApiActions(state, {
                type: 'SETTING_CITY_DELETE_RESPONSE',
                error: 'ERROR'
            })
        ).toEqual({
            otherState: false,
            test: [],
            isLoadingDeleteCity: false,
            error: 'ERROR'
        })
    })

    test('should handle actions from same module', () => {
        expect(
            handleGeneratedApiActions(
                state,
                {
                    type: 'SETTING_CITY_DELETE_RESPONSE',
                    error: 'ERROR'
                },
                'SETTING'
            )
        ).toEqual({
            otherState: false,
            test: [],
            isLoadingDeleteCity: false,
            error: 'ERROR'
        })
    })

    test('should not handle actions from another module', () => {
        expect(
            handleGeneratedApiActions(
                state,
                {
                    type: 'SETTING_CITY_DELETE_RESPONSE',
                    error: 'ERROR'
                },
                'BOOKING'
            )
        ).toEqual(state)
    })
})
