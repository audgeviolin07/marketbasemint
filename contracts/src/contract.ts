// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, UnorderedMap, NearPromise, Vector } from 'near-sdk-js';

const MIN_STORAGE: bigint = BigInt("1000000000000000000000") // 0.001Ⓝ

interface Creators {
  nfts: UnorderedMap<string>;
  socials: UnorderedMap<string>;
  name: string;
}

interface Users {
  creator: boolean
  nearEarned: number,
  engagement: number,
  nfts: UnorderedMap<string>;
}

@NearBindgen({})
class HelloNear {
  users: UnorderedMap<Users> = new UnorderedMap<Users>('users');
  creators: UnorderedMap<Creators> = new UnorderedMap<Creators>('creators');
  
  // @call({payableFunction:true})
  // create({prefix}:{prefix: String}) {
  //   const account_id = `${prefix}.${near.currentAccountId()}`

  //   NearPromise.new(account_id)
  //   .createAccount()
  //   .transfer(MIN_STORAGE)
  // }

  @view({})
  get_hello(): string {
    return "Hello, Near!";
  }

  @call({})
  add_user(): void {
    let account_id = near.signerAccountId();
    near.log(`Adding user ${account_id}`);
    this.users.set(account_id, {
      creator: false,
      nearEarned: 0,
      engagement: 0,
      nfts: new UnorderedMap<string>('nfts')
    });
  }

  @view({})
  get_user_points(): number {
    let account_id = near.signerAccountId();
    return this.users.get(account_id).engagement;
  }

  @call({})
  add_points({ points }: { points: number }): void {
    let account_id = near.signerAccountId();
    let user = this.users.get(account_id);
    if (user != null) {
      near.log(`Incrementing user points. User: ${account_id}`);
      this.users.set(account_id, { ...user, engagement: user.engagement + points });
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

  @call({})
  add_creator({account_id}: {account_id: string}): void {
    this.creators.set(account_id, {
      nfts: new UnorderedMap<string>('nfts'),
      socials: new UnorderedMap<string>('socials'),
      name: ""
    });
  }

  @view({})
  get_creators(): string[] {
    return this.creators.keys({start: 0, limit: null});
  }
 }