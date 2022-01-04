## Uniswap V3 Staker

A frontend to be used to perform liquidity mining incentives via the [Uniswap V3 Staker Contract](https://github.com/Uniswap/uniswap-v3-staker).

### Example
The incentive program(s) use the [Uniswap V3 Staker Contract](https://github.com/Uniswap/uniswap-v3-staker) mentioned above.

## Getting started

#### Configuration

- Deploy the [staker contract](https://github.com/Uniswap/uniswap-v3-staker), and create a future incentive.
- Update the config at `src/config.tsx` accordingly.

### Run

- Copy `.env.local.sample` to `.env.local` and configure.
- Run `make` to start the app.
- Visit the dapp at http://localhost:7373

MIT