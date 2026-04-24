import { MongoClient } from "mongodb";
import { MongoHelper } from "../helpers/mongo-helper";
import { AccountMongoRepository } from "./account";

describe("Account Mongo Repository", () => {
    let client: MongoClient;

	beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
        
    });
    
    afterAll(async () => {
        await MongoHelper.disconnect();
    });

    beforeEach(async () => {
        const accountCollenction = MongoHelper.getCollection("accounts");
        await accountCollenction.deleteMany({});
    })

    const makeSut = (): AccountMongoRepository => {
        return new AccountMongoRepository()
    }
	
    test("should return an account on success", async () => {
		const sut = makeSut();
		const account = await sut.add({
			name: "any_name",
			email: "anyemail@email.com",
			password: "any_password"
		});

		expect(account).toBeTruthy();
		expect(account.id).toBeTruthy();
		expect(account.name).toBe("any_name");
		expect(account.email).toBe("anyemail@email.com");
		expect(account.password).toBe("any_password");
	});
});
