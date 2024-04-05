import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';
import { StoreProvider} from './ui/StoreProvider';
import type {StateSchema, ThunkConfig, ThunkExtraArg} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig
};