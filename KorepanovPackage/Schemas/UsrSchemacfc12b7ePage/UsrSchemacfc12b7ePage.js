define("UsrSchemacfc12b7ePage", [], function() {
	return {
		entitySchemaName: "UsrCreditHistory",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrCreditOwner65f9b804-e681-4f7f-a1f5-9e9bf94f89a3",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrCreditOwner",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCreditRequest0ad0bedd-4539-4516-b0f5-95adf193d4de",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrCreditRequest",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCreditRepaymentDate79177ce4-7e53-4d5d-a3ec-33fc389ce9ec",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrCreditRepaymentDate",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCreditIsDonece770b43-5f94-45d8-aab7-33bb5c61c535",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 17,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrCreditIsDone",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});
