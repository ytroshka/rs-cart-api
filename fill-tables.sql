insert into cart (id, user_id, created_at, updated_at, status) values
    ('0e39f3e3-b2d3-4bb1-af6a-06a31704d660', '4f4ec824-9358-4a1c-a4b1-09c2dfc8e880', NOW(), NOW(), 'OPEN'),
    ('4a28d8a6-1d24-4a6f-bc6f-b65d98d4f905', '4f4ec824-9358-4a1c-a4b1-09c2dfc8e880', NOW(), NOW(), 'ORDERED'),
    ('ac9d9a87-66aa-43f3-934e-7cb123c2dd2b', '5a2f65d9-9c5e-4cbf-8445-abb12f72e10d', NOW(), NOW(), 'OPEN'),
    ('d20e0e5a-1686-448f-83fc-3a7b096c2e79', '5a2f65d9-9c5e-4cbf-8445-abb12f72e10d', NOW(), NOW(), 'ORDERED'),
    ('49edf690-64a6-4c6f-bf75-d8a868b0a6e7', 'f0d3f319-6402-4626-b7a6-1a17a8cf6d90', NOW(), NOW(), 'OPEN'),
    ('8cfce5b5-b5d1-446d-bf5c-6ba6f3133f3e', 'f0d3f319-6402-4626-b7a6-1a17a8cf6d90', NOW(), NOW(), 'ORDERED'),
    ('59fba05b-5265-4fb5-8b5c-51d9da1a7ca6', '52c7e2f2-0a7d-4750-a8b7-1221a9f08011', NOW(), NOW(), 'OPEN'),
    ('be7803a3-d3b6-45e1-8cc9-9cc9f7b29609', '52c7e2f2-0a7d-4750-a8b7-1221a9f08011', NOW(), NOW(), 'ORDERED'),
    ('a36d9657-536e-4798-9472-9d6a9eae1f0c', 'c711a07d-bf72-4f14-8a55-6b9a6aa3f47f', NOW(), NOW(), 'OPEN'),
    ('d4aa99e2-4ce8-4cc9-a7cc-9e939f0e9872', 'c711a07d-bf72-4f14-8a55-6b9a6aa3f47f', NOW(), NOW(), 'ORDERED');


insert into cart_item (product_id, count, cart_id) values
	('c12f4196-7fe7-4989-ac54-6c9d150fab71', 5, '0e39f3e3-b2d3-4bb1-af6a-06a31704d660'),
	('9cde06e6-96ef-4887-b0cd-919099fe5732', 2, '0e39f3e3-b2d3-4bb1-af6a-06a31704d660'),
	('9f01ec0c-b569-47a2-8727-1584f79b4183', 3, '0e39f3e3-b2d3-4bb1-af6a-06a31704d660'),
	('c12f4196-7fe7-4989-ac54-6c9d150fab74', 1, '4a28d8a6-1d24-4a6f-bc6f-b65d98d4f905'),
	('c12f4196-7fe7-4989-ac54-6c9d150fab75', 10, 'ac9d9a87-66aa-43f3-934e-7cb123c2dd2b'),
	('9cde06e6-96ef-4887-b0cd-919099fe5736', 10, 'ac9d9a87-66aa-43f3-934e-7cb123c2dd2b'),
	('9cde06e6-96ef-4887-b0cd-919099fe5737', 8, 'd20e0e5a-1686-448f-83fc-3a7b096c2e79'),
	('9f01ec0c-b569-47a2-8727-1584f79b4188', 3, '49edf690-64a6-4c6f-bf75-d8a868b0a6e7'),
	('c12f4196-7fe7-4989-ac54-6c9d150fab79', 5, '49edf690-64a6-4c6f-bf75-d8a868b0a6e7'),
	('9cde06e6-96ef-4887-b0cd-919099fe5730', 1, '8cfce5b5-b5d1-446d-bf5c-6ba6f3133f3e'),
	('9f01ec0c-b569-47a2-8727-1584f79b418a', 1, '8cfce5b5-b5d1-446d-bf5c-6ba6f3133f3e'),
	('c12f4196-7fe7-4989-ac54-6c9d150fab7b', 1, '8cfce5b5-b5d1-446d-bf5c-6ba6f3133f3e'),
	('9cde06e6-96ef-4887-b0cd-919099fe573c', 7, '59fba05b-5265-4fb5-8b5c-51d9da1a7ca6'),
	('9f01ec0c-b569-47a2-8727-1584f79b418d', 8, '59fba05b-5265-4fb5-8b5c-51d9da1a7ca6'),
	('c12f4196-7fe7-4989-ac54-6c9d150fab7e', 20, 'be7803a3-d3b6-45e1-8cc9-9cc9f7b29609'),
	('9cde06e6-96ef-4887-b0cd-919099fe573f', 5, 'a36d9657-536e-4798-9472-9d6a9eae1f0c'),
	('9f01ec0c-b569-47a2-8727-1584f79b4185', 5, 'a36d9657-536e-4798-9472-9d6a9eae1f0c');

