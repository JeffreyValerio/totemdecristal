export interface ProductInterface {
  id?: string;
  p_cod?: string;
  p_name?: string;
  p_description?: string;
  p_priceN?: number;
  p_priceUSD?: number;
  p_stock?: number;
  p_rating?: number;
  p_visible?: string;
  p_image?: string;
  p_idCategorie?: string;
  p_off?: number;
  p_created?: Date;
  p_modified?: Date;
}
