import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe("Carrinho - E2E", () => {

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
  });

  it("Deve adicionar produto ao carrinho", () => {
    InventoryPage.addFirstProductToCart();
    InventoryPage.validateCartBadge("1");
  });
});