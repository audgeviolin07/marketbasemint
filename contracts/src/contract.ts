// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, UnorderedMap, NearPromise } from 'near-sdk-js';

@NearBindgen({})
class HelloNear {
  users: UnorderedMap<number> = new UnorderedMap<number>('users');

  @view({})
  get_hello(): string {
    return "Hello, Near!";
  }

  @call({})
  add_user(): void {
    let account_id = near.signerAccountId();
    near.log(`Adding user ${account_id}`);
    this.users.set(account_id, 0);
  }

  @view({})
  get_user_points(): number {
    let account_id = near.signerAccountId();
    return this.users.get(account_id);
  }

  @call({})
  add_points({ points }: { points: number }): void {
    let account_id = near.signerAccountId();
    let curr_points = this.users.get(account_id);
    if (curr_points != null) {
      near.log(`Incrementing user points. User: ${account_id}`);
      this.users.set(account_id, curr_points + points);
    }

  }

  @call({})
  transfer({amount}: {amount: bigint}): NearPromise {
    return NearPromise.new(near.signerAccountId()).transfer(amount);
  }

  @call({})
  twitch_engagement(): NearPromise {
    return NearPromise.new(near.signerAccountId()).transfer(BigInt(1 * 10 ** 24));
  }

  @view({})
  get_wallet_balance(): bigint {
    //only gets the contract users balance
    return near.accountBalance() / BigInt(10 ** 24);
  }
 }