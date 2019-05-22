__Base bootstrap from:__  
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

## Notes
Dependency `@types/styled-components` must be version `4.1.8` or under.  
Not quite sure why, `tsc` just spits a bunch of errors for higher versions.  
`@types/styled-components` versions `4.1.9` and up install `@types/react-native`,  
which seems to break stuff.  
https://stackoverflow.com/a/55348582/10927893

## Misc redux observations / notes
Every _reducer_ gets their _own state_.  

_Actions_ don't know anything about how the state looks.  
They just carry data, which can be used by _reducers_.

_Reducers_ know the state they are running on; they receive actions,  
which lets the reducers figure out what to do.
