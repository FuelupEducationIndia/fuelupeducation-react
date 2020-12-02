import auth from '../store/reducers/auth'
import * as actions from '../store/actions/actionTypes'


describe('reducer', () => {
    it('should expect the state', () => {
        expect(auth(undefined, {})).toEqual({
            error: null,
            loading: false,
            userId: null,
            tokenId: null
        })
    })

    it('should store the token upon auth', () => {
        expect(auth({
            error: null,
            loading: false,
            userId: null,
            tokenId: null
        }, {
            type: actions.AUTH_SUCCESS,
            userId: 'some userId',
            tokenId: 'some tokenId'
        }
        )).toEqual({
            
            error: null,
            loading: false,
            userId: 'some userId',
            tokenId: 'some tokenId'
        })
    })
})